import { StatusBar } from "react-native";
import {Home} from "./SRC/Screens/Home";

export default function App(){

return(
  <>
  <Home/>
  <StatusBar
    barStyle={"light-content"}
    backgroundColor={"transparent"}
    translucent
    
  />
</>
);
}


