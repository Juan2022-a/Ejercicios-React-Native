import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
 
export default function TodoListApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);
  const [updatedTaskText, setUpdatedTaskText] = useState('');
 
  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };
 
  const handleDeleteTask = (index) => {
    Alert.alert(
      'Confirmar Eliminar',
      'Estas seguro de eliminar esta tarea?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Eliminar',
          onPress: () => {
            const updatedTasks = tasks.filter((task, i) => i !== index);
            setTasks(updatedTasks);
          },
        },
      ],
      { cancelable: false }
    );
  };
 
  const handleUpdateTask = () => {
    if (selectedTaskIndex !== null && updatedTaskText.trim() !== '') {
      const updatedTasks = [...tasks];
      updatedTasks[selectedTaskIndex] = updatedTaskText;
      setTasks(updatedTasks);
      setUpdatedTaskText('');
      setSelectedTaskIndex(null);
    }
  };
 
  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.taskItem}>
        <Text style={styles.taskText}>{item}</Text>
        <View style={styles.taskButtons}>
          <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteTask(index)}>
            <Text style={styles.buttonText}>Eliminar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.updateButton}
            onPress={() => {
              setSelectedTaskIndex(index);
              setUpdatedTaskText(tasks[index]);
            }}
          >
            <Text style={styles.buttonText}>Actualizar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
 
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Ingresa una nueva tarea'
          value={newTask}
          onChangeText={setNewTask}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.buttonText}>Agregar</Text>
        </TouchableOpacity>
      </View>
 
      <FlatList
        style={styles.taskList}
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
 
      {selectedTaskIndex !== null && (
        <View style={styles.updateContainer}>
          <TextInput
            style={styles.updateInput}
            placeholder='Actualiza la tarea'
            value={updatedTaskText}
            onChangeText={setUpdatedTaskText}
          />
          <TouchableOpacity style={styles.updateButton} onPress={handleUpdateTask}>
            <Text style={styles.buttonText}>Actualizar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#212529',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  addButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskList: {
    width: '100%',
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  taskText: {
    fontSize: 18,
    color: '#212529',
  },
  taskButtons: {
    flexDirection: 'row',
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  updateButton: {
    backgroundColor: '#17a2b8',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  updateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  updateInput: {
    flex: 1,
    height: 40,
    borderColor: '#007bff',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
});