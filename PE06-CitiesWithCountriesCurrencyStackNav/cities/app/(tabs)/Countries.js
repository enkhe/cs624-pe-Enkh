import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import CenterMessage from '../components/CenterMessage'
import { colors } from './Colors'

class Countries extends React.Component {
  state = {
    editModalVisible: false,
    editIndex: null,
    editCountry: '',
    editCurrency: ''
  }

  openEditModal = (index, item) => {
    this.setState({
      editModalVisible: true,
      editIndex: index,
      editCountry: item.country,
      editCurrency: item.currency
    });
  }

  closeEditModal = () => {
    this.setState({ editModalVisible: false, editIndex: null, editCountry: '', editCurrency: '' });
  }

  handleEditSave = () => {
    const { editIndex, editCountry, editCurrency } = this.state;
    this.props.editCountry(editIndex, { country: editCountry, currency: editCurrency });
    this.closeEditModal();
  }

  render() {
    // Defensive: ensure countries is always an array
    const { countries = [], deleteCountry } = this.props;
    const { editModalVisible, editCountry, editCurrency } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: '#f4f6fb' }}>
        <Text style={styles.heading}>Countries</Text>
        <ScrollView contentContainerStyle={[!countries.length && { flex: 1 }]}> 
          <View style={[!countries.length && { justifyContent: 'center', flex: 1 }]}> 
            {
              !countries.length && <CenterMessage message='No saved countries!' />
            }
            {
              countries.map((item, index) => (
                <View style={styles.card} key={index}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.country}>{item.country}</Text>
                    <Text style={styles.currency}>{item.currency}</Text>
                  </View>
                  <TouchableOpacity onPress={() => this.openEditModal(index, item)} style={styles.iconButton}>
                    <Ionicons name="pencil" size={22} color="#1976D2" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => deleteCountry(index)} style={styles.iconButton}>
                    <Ionicons name="trash" size={22} color="#e53935" />
                  </TouchableOpacity>
                </View>
              ))
            }
          </View>
        </ScrollView>
        <Modal
          visible={editModalVisible}
          animationType="slide"
          transparent
          onRequestClose={this.closeEditModal}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Edit Country</Text>
              <TextInput
                style={styles.input}
                value={editCountry}
                onChangeText={val => this.setState({ editCountry: val })}
                placeholder="Country name"
              />
              <TextInput
                style={styles.input}
                value={editCurrency}
                onChangeText={val => this.setState({ editCurrency: val })}
                placeholder="Currency"
              />
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <TouchableOpacity onPress={this.closeEditModal} style={styles.cancelButton}>
                  <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.handleEditSave} style={styles.saveButton}>
                  <Text style={styles.saveText}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1976D2',
    marginTop: 30,
    marginBottom: 10,
    alignSelf: 'center',
    letterSpacing: 1
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2
  },
  country: {
    fontSize: 20,
    fontWeight: '600',
    color: '#222',
    marginBottom: 2
  },
  currency: {
    color: '#888',
    fontSize: 16
  },
  iconButton: {
    marginLeft: 10,
    padding: 6,
    borderRadius: 6,
    backgroundColor: '#f0f4fa'
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContent: {
    width: 320,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 16
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    fontSize: 16
  },
  cancelButton: {
    padding: 10,
    marginRight: 10
  },
  cancelText: {
    color: '#888',
    fontSize: 16
  },
  saveButton: {
    backgroundColor: '#1976D2',
    borderRadius: 8,
    padding: 10
  },
  saveText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  }
})

export default Countries
