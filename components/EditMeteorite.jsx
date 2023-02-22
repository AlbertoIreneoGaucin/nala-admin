/* eslint-disable */

'use client'

import { v4 as uuid } from 'uuid';
import { Button, TextField, Card, CardContent, CardActions, CardHeader,  } from '@mui/material'
import { GeoPoint } from 'firebase/firestore';
import {  useState, useId } from 'react';
import { collection, addDoc, doc, query, where, onSnapshot, updateDoc } from "firebase/firestore"; 
import {firestore }from '../utils/firebase'
const EditMeteorite = (props) => {
  const [description, setDescription] = useState(props.data.description);
  const [name, setName] = useState(props.data.name);
  const [visible, setVisible] = useState(props.data.visible);
  const [nation, setNation] = useState(props.data.nation);
  const [state, setState] = useState(props.data.state);
  const [picture, setPicture] = useState(props.data.picture);
  const [id, setId] = useState(props.data._id)
  const [latitude, setLatitude] = useState(props.data.coordinates._lat);
  const [longitude, setLongitude] = useState(props.data.coordinates._long);
  const data = props.data
// ADD A NEW DOCUMENT TO YOUR COLLECTION
const addMeteorite = async (meteoriteData) => {
    
  const db = firestore
    const q = query(collection(db, "Meteorites"));
try{
const querySnapshot = await addDoc(q, meteoriteData);
}catch(err){
  alert(err)
}
  //const newMeteorite = await addDoc(meteoriteCollection, { ...meteoriteData });
  //console.log(`The new meteorite was created at ${newMeteorite.path}`);
  
};

  const editMeteorite = async (e) => {
    
    e.preventDefault();
    //console.log(new GeoPoint(parseInt(latitude), parseInt(longitude)))
    const coordinates = new GeoPoint(parseInt(latitude), parseInt(longitude))
    //let _id = uuid().toString();
    const db = firestore
      
     
     
    const citiesRef = collection(db, "Meteorites");
    

    const q = query(citiesRef, where("_id", "==", data._id));
    const cool = onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach((doc) =>{
      const coordinates = new GeoPoint(parseInt(latitude), parseInt(longitude))
     //doc.data
      updateDoc(doc.ref, {
      description: description,
      name: name,
      nation: nation,
      state: state,
      picture: picture,
      coordinates: coordinates,
      visible: visible
    });
    })
  })
    
    
    
  };

    return(
        <form onSubmit={(e) => editMeteorite(e)} style={{
             //width: '50%',
             //margin: 'auto',
            // textAlign:'center',
             //display: 'inline-block',
            
             
           }}>
               <Card >
             <CardHeader  title="Edit a Meteorite: " />
             <CardContent>
               <div>
                 <TextField
                   inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                   fullWidth
                   id="lat"
                   type="latitude"
                   label="latitude"
                   
                   margin="normal"
                   value={latitude}
                   onChange={(e) => setLatitude(e.target.value)}
                   
                 />
                 <TextField
                  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                   fullWidth
                   id="lat"
                   type="longitude"
                   label="longitude"
                   
                   margin="normal"
                   value={longitude}
                   onChange={(e) => setLongitude(e.target.value)}
                   
                 />
                 <TextField
                  
                  fullWidth
                  id="name"
                  type="name"
                  label="name"
                  
                  margin="normal"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  
                />
                <TextField
                  
                  fullWidth
                  id="desc"
                  type="desc"
                  label="description"
                  
                  margin="normal"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  
                />
                {/*
                <TextField
                  
                  fullWidth
                  id="desc"
                  type="desc"
                  label="picture"
                  
                  margin="normal"
                  value={picture}
                  onChange={(e) => setPicture(e.target.value)}
                  
                />
          */}
                <label>Visible:  </label>
                 <select value={visible} onChange={(e) => setVisible(e.target.value)}>
                   <option value=""> </option>
                   <option value="True">True</option>
                   <option value="False">False</option>
                   </select>
                   <br></br>
                   <label>Nation:  </label>
                 <select value={nation} onChange={(e) => setNation(e.target.value)}>
                   <option value="">n/a </option>
                   <option value="Cherokee">Cherokee</option>
                   <option value="Chickasaw">Chickasaw</option>
                   <option value="Choctaw">Choctaw</option>
                   </select>
                   <br></br>
                   <label>State:  </label>
                 <select value={state} onChange={(e) => setState(e.target.value)}>
                   <option value=""> </option>
                   <option value="Oklahoma">Oklahoma</option>
                   
                   </select>
               </div>
             </CardContent>
             <CardActions>
             <Button variant="outlined" onClick={editMeteorite}>Edit Meteorite</Button>
               </CardActions>
               
             </Card>
       
      
           
               </form>
    )
    
    
}

export default EditMeteorite;