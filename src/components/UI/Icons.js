import { MaterialIcons } from '@expo/vector-icons';
import {Pressable, StyleSheet, Text, View } from 'react-native';

const Icons = {};


    const Add = () =><MaterialIcons name='add' size={16}/>;
    const Edit = () => <MaterialIcons name='edit' size={16}/>;
    const Delete = () => <MaterialIcons name='delete' size={16}/>;
    const Close = () => <MaterialIcons name='close' size={16}/>

// compose

Icons.Add = Add;
Icons.Edit = Edit;
Icons.Delete= Delete;
Icons.Close= Close;

export default Icons;