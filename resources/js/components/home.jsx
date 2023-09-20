import React, { useEffect, useState } from "react"
import axios from 'axios'



// Endpoints connection
const response = await axios.get(
  "http://127.0.0.1:8000/api/vehicles"
);

const ShowVehicles = () => {
   const [vehicles, setVehicles] = useState(response.data);
   const [type, setType] = useState();
   const [use, setUse] = useState();
   const [maxPrice, setMaxPrice] = useState();
   const [minPrice, setMinPrice] = useState();
   const [maxAutonomy, setMaxAutonomy] = useState();
   const [minAutonomy, setMinAutonomy] = useState();
   const [duration, setDuration] = useState();
   const [isActive1, setActive1] = useState(false);
   const [isActive2, setActive2] = useState(false);
   const [isActive3, setActive3] = useState(false);
   const [isActive4, setActive4] = useState(false);
   const [isActive5, setActive5] = useState(false);
   const [isActive6, setActive6] = useState(false);
   const [isActive7, setActive7] = useState(false);
   const [isActive8, setActive8] = useState(false);
   const [isActive9, setActive9] = useState(false);
   const [isActive10, setActive10] = useState(false);
   const [selectedOption1, setSelectedOption1] = useState();
   const [selectedOption2, setSelectedOption2] = useState();
//Search   
const search = (e) => {
//type 
    if(e.target.value=="1"){
      setType('1');
      setSelectedOption1('1'); 
    }
    if(e.target.value=="2"){
      setType('2');
      setSelectedOption1('2');
    }
    if(e.target.value=="3"){
      setType('3');
      setSelectedOption1('3');
    }
 
//use
    if(e.target.value=="4"){
      setUse('1');
      setSelectedOption2('4'); 
    }
    if(e.target.value=="5"){
      setUse('2');
      setSelectedOption2('5'); 
    }
    if(e.target.value=="6"){
      setUse('3');
      setSelectedOption2('6'); 
    }
//price   
    if(e.target.value=="7"){
      setMinPrice('90');
      setMaxPrice('100');
      setActive1(true);
      setActive2(false);
      setActive3(false);
    }
    if(e.target.value=="8"){
      setMinPrice('101');
      setMaxPrice('200');
      setActive1(false);
      setActive2(true);
      setActive3(false);
    }
    if(e.target.value=="9"){
      setMinPrice('201');
      setMaxPrice('9999');
      setActive1(false);
      setActive2(false);
      setActive3(true);
    }

//autonomy   
    if(e.target.value=="10"){
      setMinAutonomy('0');
      setMaxAutonomy('70');
      setActive4(true);
      setActive5(false);
      setActive6(false);
    }
    if(e.target.value=="11"){
      setMinAutonomy('71');
      setMaxAutonomy('100');
      setActive4(false);
      setActive5(true);
      setActive6(false);
    }
    if(e.target.value=="12"){
      setMinAutonomy('101');
      setMaxAutonomy('9999');
      setActive4(false);
      setActive5(false);
      setActive6(true);
    }
//duration 
    if(e.target.value=="13"){
      setDuration('12');
      setActive7(true);
      setActive8(false);
      setActive9(false);
      setActive10(false);
    }

    if(e.target.value=="14"){
      setDuration('24');
      setActive7(false);
      setActive8(true);
      setActive9(false);
      setActive10(false);
    }

    if(e.target.value=="15"){
      setDuration('36');
      setActive7(false);
      setActive8(false);
      setActive9(true);
      setActive10(false);
    }

    if(e.target.value=="16"){
      setDuration('48');
      setActive7(false);
      setActive8(false);
      setActive9(false);
      setActive10(true);
    }
    
    //  const filtered =response.data.filter((vehicles) => vehicles.type==type );
    const filtered =response.data.filter((vehicles) => vehicles.type==type 
                                                       &&  
                                                       vehicles.use==use
                                                       && 
                                                       ((vehicles.price > minPrice) &&  (vehicles.price <= maxPrice))
                                                       &&
                                                      ((vehicles.autonomy > minAutonomy) &&  (vehicles.autonomy <= maxAutonomy))
                                                       &&
                                                        vehicles.duration==duration 
                                                       );

     setVehicles(filtered);
  };



//clear
const clear = () => {
  setVehicles(response.data);
  setSelectedOption1(''); 
  setSelectedOption2(''); 
  setActive1(false);
  setActive2(false);
  setActive3(false);
  setActive4(false);
  setActive5(false);
  setActive6(false);  
  setActive7(false);
  setActive8(false);  
  setActive9(false);
  setActive10(false);  
}


return (
  <div class="container-fluid" >
  <div class="row">
      <nav class="col-md-2 sidebar border padding20" >
          <ul class="nav flex-column">           
              <li class="nav-item margintop20">
              <h6>Tipo de cliente</h6>
              <div>
                <select  value={selectedOption1}  class="form-control"  onChange={search}>
                  <option value="0">&nbsp;</option>
                  <option value="1">premium</option>
                  <option value="2">special</option>
                  <option value="3">basic</option>
                </select>
              </div>
              <br />
              <h6>uso del vehiculo</h6>
              <div>
                <select  value={selectedOption2} class="form-control"  onChange={search}>
                  <option value="0">&nbsp;</option>
                  <option value="4">transport</option>
                  <option value="5">urban</option>
                  <option value="6">highway</option>
                </select>
              </div>
            </li>
            <li class="nav-item margintop20 w-100 ">
              <h6>Precio</h6>
              <button onClick={search}  class={isActive1 ? 'clicked btn btn-sm width100': "btn btn-sm width100 bg-grey"}  value="7">&#60;100€</button>
              <button onClick={search}  class={isActive2 ? 'clicked btn btn-sm width100': "btn btn-sm width100 bg-grey"}  value="8">100 a 200 €</button>
              <button onClick={search}  class={isActive3 ? 'clicked btn btn-sm width100': "btn btn-sm width100 bg-grey"}  value="9">&#62;200 €</button>
            </li>
            <li class="nav-item margintop20">
              <h6>Autonomia</h6>
              <button onClick={search} class={isActive4 ? 'clicked btn btn-sm width100': "btn btn-sm width100 bg-grey"}  value="10">&#60;70 km</button>
              <button onClick={search} class={isActive5 ? 'clicked btn btn-sm width100': "btn btn-sm width100 bg-grey"}  value="11">70-100 km</button>
              <button onClick={search} class={isActive6 ? 'clicked btn btn-sm width100': "btn btn-sm width100 bg-grey"}  value="12">&#62;100 km</button>
            </li>
            <li class="nav-item margintop20">
              <h6>Duracion <small>Meses de contrrato</small></h6>
              <button onClick={search} class={isActive7 ? 'clicked btn btn-sm width100': "btn btn-sm width100 bg-grey"}value="13">12</button>
              <button onClick={search} class={isActive8 ? 'clicked btn btn-sm width100': "btn btn-sm width100 bg-grey"} value="14">24</button>
              <button onClick={search} class={isActive9 ? 'clicked btn btn-sm width100': "btn btn-sm width100 bg-grey"} value="15">36</button>
              <button onClick={search} class={isActive10 ? 'clicked btn btn-sm width100': "btn btn-sm width100 bg-grey"} value="16">48</button>
            </li> 
            <li>
              {/* <label>
              Circulación autovia &nbsp;
              </label> 
              <input
              disabled="disabled"
              type="checkbox"
              name="check1"
              value="18"
              onChange={search}
              />

              <br />
              <label>
              Conducir sin carnet &nbsp;
              </label>
              <input
              disabled="disabled"
              type="checkbox"
              name="check2"
              value="19"
              onChange={search}
              />

              <br/>
              <label>
              Baul de carga &nbsp;
              </label>
              <input
              disabled="disabled"
              type="checkbox"
              name="check3"
              value="20"
              onChange={search}
              /> */}

            </li>
            <li>
              <button type="button" class="btn btn-danger btn-sm btn-block mt-3" onClick={clear}>Limpiar</button>
            </li>
            <li>  
              <button type="button" class="btn btn-success btn-sm btn-block mt-3" onClick={search}>Busca</button>
            </li>                          
         </ul>
      </nav>
      <main role="main" class="col-md-9 margintop20">
          <div class="container">
          <div class="row">
              {vehicles.map((vehicle) => (
              <div key={vehicle.id} class="col-md-3 mw250px">
              
                    <div class="w-100">
                  
                        <img src={vehicle.url}  width="250" height="150" /> 
                      </div>  
                      <div class="width70 fl">
                        <p  class="txt1">{vehicle.description}</p>
                        <br />
                      </div>
                      <div class="width30 fr" >
                          <span class="title1">Desde</span>
                          <span class="title2">{vehicle.price}€</span>
                          <span class="title3">Al mes</span>
                      </div> 
                </div>
          ))}
          
          </div>     
          </div>  
      </main>
  </div>
</div>
);
}

export default ShowVehicles;
