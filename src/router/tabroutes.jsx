import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/home/Home';
import Map from '../pages/map/Map'
import Contact from '../pages/contacts/Contact'
import Settings from '../pages/setting/Settings'
import {Feather, Ionicons, Entypo} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
        <Tab.Navigator>
          <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{
              headerShown: false,
              tabBarIcon: () => {
                return (<Ionicons name="home-outline" size={24} color="black" />)
              }}}
          />  
          <Tab.Screen 
            name="Mapa" 
            component={Map}
            options={{
              headerShown: false,
              tabBarIcon: () => {
                return (<Entypo name="location" size={24} color="black" />)
              }}}
          /> 

          <Tab.Screen 
            name="Contatos" 
            component={Contact} 
            options={{
              headerShown: false,
              tabBarIcon: () => {
                return (<Feather name="users" size={24} color="black" />)
              }}}
          />   
          <Tab.Screen 
            name="Configurações" 
            component={Settings} 
            options={{
              headerShown: false,
              tabBarIcon: () => {
                return (<Feather name="settings" size={24} color="black" />)
              }}}
          /> 
        </Tab.Navigator>

  );
}