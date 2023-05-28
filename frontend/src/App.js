import React, { useState } from 'react';

function App() {

  const[Item_Identifier, SetItem_Identifier]=useState("");
  const[Item_Weight,SetItem_Weight]=useState("");
  const[Item_Fat_Content, SetItem_Fat_Content]=useState("");
  const[Item_Visibility,SetItem_Visibility]=useState("");
  const[Outlet_Identifier, SetOutlet_Identifier]=useState("");
  const[Outlet_Establishment_Year, SetOutlet_Establishment_Year]=useState("");
  const[Outlet_Location_Type,SetOutlet_Location_Type]=useState("");
  const[Item_Type,SetItem_Type]=useState("");
  const[Item_MRP,SetItem_MRP]=useState("");
  const[Outlet_Type,SetOutlet_Type]=useState("");
  const[response,SetResponse]=useState({});

  const[Outlet_Size,SetOutlet_Size] = useState("")

  const handleItem_Identifier = (value) =>{
    SetItem_Identifier(value)
  }
  const handleItem_Weight = (value) =>{
    SetItem_Weight(value)
  }
  const handleItem_Fat_Content = (e) =>{
    SetItem_Fat_Content(e.target.value);
    console.log(e.target.value);
  }
  const handleItem_Visibility = (value) =>{
    SetItem_Visibility(value)
  }
  const handleItem_Type= (value) =>{
    SetItem_Type(value)
  }
  const handleItem_MRP = (value) =>{
    SetItem_MRP(value)
  }
  const handleOutlet_Identifier= (value) =>{
    SetOutlet_Identifier(value)
  }
  const handleOutlet_Establishment_Year = (value) =>{
    SetOutlet_Establishment_Year(value)
  }
  const handleOutlet_Size = (e) =>{ 
    SetOutlet_Size(e.target.value);
    console.log(e.target.value);
  }  

  const handleOutlet_Location_Type = (value) =>{
    SetOutlet_Location_Type(value)
  }
  const handleOutlet_Type = (value) =>{
    SetOutlet_Type(value)
  }

  const data = {   "Item_Identifier": Item_Identifier,
    "Item_Weight": Item_Weight ,
    "Item_Fat_Content": Item_Fat_Content,
    "Item_Visibility": Item_Visibility,
     "Outlet_Identifier": Outlet_Identifier, 
     "Outlet_Establishment_Year": Outlet_Establishment_Year,
    "Outlet_Size": Outlet_Size, 
    "Outlet_Location_Type": Outlet_Location_Type,
    "Item_Type": Item_Type,
    "Item_MRP": Item_MRP,
    "Outlet_Type": Outlet_Type
    
};

const newPredict=() =>{
  fetch('http://127.0.0.1:8000/main/predict', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then((response) => response.json())
  .then((data) => {
    SetResponse(data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}



  return (
    <div className='bg-dark'>
    <div className="container text-light  p-5">
      <h1 className='text-center mb-5'>BigMart Sales Prediction ML Project </h1>
      <div className='container-fluid'>
          <div className='row'>
              <div className='col-6'>
                  <div className='row my-2'>
                      <div className='col-6'>
                          <div className='mb-1'>Item Identifier</div>
                          <input  className="form-control mb-3" onChange={(i => handleItem_Identifier(i.target.value))}/> 
                      </div>
                      <div className='col-6'>
                        <div className='mb-1'>Item Weight</div>
                        <input className="form-control mb-3" onChange={(i => handleItem_Weight(i.target.value))}/> 
                      </div>
                  </div>
                  <div className='row my-2'>
                      <div className='col-6'>
                        <div className='mb-1'>Item Fat Content</div>
                        <select className="form-select form-select-lg mb-3" onChange={e => handleItem_Fat_Content(e)} name="cars">
                          <option value="Regular">Regular</option>
                          <option value="Low Fat">Low Fat</option>
                        </select> 
                      </div>
                      <div className='col-6'>
                        <div className='mb-1'>Item Visibility</div>
                        <input className="pb-3 form-control mb-3" onChange={(i => handleItem_Visibility(i.target.value))}/> 
                      </div>
                  </div>
                  <div className='row my-2'>
                      <div className='col-6'>
                        <div className='mb-1'>Item Type</div>
                        <select className="form-select form-select-lg mb-3" onChange={e => handleItem_Type(e.target.value)} name="cars">
                          <option value="Dairy">Dairy</option>
                          <option value="Soft Drinks">Soft Drinks</option>
                          <option value="Meat">Meat</option>
                          <option value="Fruits and Vegetables">Fruits and Vegetables</option>
                          <option value="Baking Goods">Baking Goods</option>
                          <option value="Household">Household</option>
                          <option value="Snack Foods">Snack Foods</option>
                          <option value="Breakfast">Breakfast</option>
                          <option value="Hard Drinks">Hard Drinks</option>
                          <option value="Health and Hygiene">Health and Hygiene</option>
                          <option value="Canned">Canned</option>
                          <option value="Frozen Foods">Frozen Foods</option>
                          <option value="Soft Drinks">Soft Drinks</option>
                          <option value="Starchy Foods">Starchy Foods</option>Others
                          <option value="Others">Others</option>
                        </select> 
                      </div>
                      <div className='col-6'>
                        <div className='mb-1'>Item MRP</div>
                        <input className="pb-3 form-control mb-3" onChange={(i => handleItem_MRP(i.target.value))}/>
                      </div>
                    </div>
                    <div className='row my-2'>
                      <div className='col-6'>
                        <div className='mb-1'>Outlet Identifier </div> 
                        <input className="form-control mb-3" onChange={(i => handleOutlet_Identifier(i.target.value))}/> 
                      </div>
                      <div className='col-6'>
                        <div className='mb-1'>Outlet Establishment_Year</div>
                        <input className="form-control mb-3" onChange={(i => handleOutlet_Establishment_Year(i.target.value))}/>
                      </div>
                    </div>
                    <div className='row my-2'>
                      <div className='col-6'>
                        <div className='mb-1'>Outlet Size</div>
                        <select class="form-select form-select-lg mb-3" onChange={e => handleOutlet_Size(e)} name="cars">
                          <option value="Small">Small</option>
                          <option value="Medium">Medium</option>
                          <option value="High">High</option>
                        </select>
                      </div>
                      <div className='col-6'>
                        <div className='mb-1'>Outlet Location Type</div>
                        <select class="form-select form-select-lg mb-3" onChange={e => handleOutlet_Location_Type(e.target.value)} name="cars">
                          <option value="Tier1">Tier1</option>
                          <option value="Tier2">Tier2</option>
                          <option value="Tier3">Tier3</option>
                        </select>       
                      </div>
                    </div>
                    <div className='row my-2'>
                      <div className='col-6'>
                        <div className='mb-1'>Outlet Type</div>
                        <select  class="form-select form-select-lg mb-3" onChange={e => handleOutlet_Type(e.target.value)} name="cars">
                          <option value="Supermarket Type1">Supermarket Type1</option>
                          <option value="Supermarket Type2">Supermarket Type2</option>
                          <option value="Supermarket Type3">Supermarket Type3</option>
                          <option value="Grocery Store">Grocery Store</option>
                        </select>  
                      </div>
                      <div className='col-6'>
                        <div className='text-center my-3'>
                            <button className='btn btn-outline-warning w-100 mt-2 py-3 '  onClick={newPredict}>Predict</button>           
                        </div>
                      </div>
                    </div>

              </div>
              <div className='col-6'>

                  <h1 className='text-center'>Sales Price Prediction : <strong className='text-warning'>{response.prediction}$</strong> </h1>
              </div>
          </div>
      </div>
    </div>
    </div>

  );
}

export default App;
