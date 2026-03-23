import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabRoutes from "./tabroutes";
import Login from "../pages/login/Login";
import Registro from "../pages/login/Registro";
import CreatEvent from "../pages/map/events/CreatEvent";
import NewContact from "../pages/contacts/NewContact";
import ContactDetails from "../pages/contacts/ContactDetails";
//import ListaCidades from "../components/ListaCidades1";


const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{
          headerShown: false,
          }}
      />  
      
      <Stack.Screen 
        name="Registro" 
        component={Registro} 
        options={{
          headerShown: false,
          }}
      />    
      
      <Stack.Screen 
        name="Inicio" 
        component={TabRoutes} 
        options={{
          headerShown: false,
          }}
      />     
      <Stack.Screen 
        name="CriarEvento" 
        component={CreatEvent} 
        options={{
          headerShown: false,
          }}
      /> 
      <Stack.Screen 
        name="NovoContato" 
        component={NewContact} 
        options={{
          headerShown: false,
          }}
      /> 

      <Stack.Screen 
        name="DetalheContato" 
        component={ContactDetails}
        options={{
          headerShown: false,
          }}
      /> 

      {/* 
      <Stack.Screen 
        name="Lista" 
        component={ListaCidades} 
        options={{
          headerShown: false,
          }}
      />  
      */}


    </Stack.Navigator>

  );
}