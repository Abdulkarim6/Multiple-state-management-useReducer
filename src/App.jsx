import { useReducer} from "react";
import "./App.css";

function App() {
  const initialState = {
    fname:"",
    lname:"",
    email:"",
    password:"",
    gender:"",
    education:"",
    feedback:"",
    PCQuantity:0,
    term:false,
  };

  const reducer = (state, action) =>{
    console.log(action);
      switch (action.type) {
        case "INPUT":
          return{
             ...state,
             [action.payload.name] : action.payload.value,

          };
        case "TOGGLE":
          return{
             ...state,
             term : !state.term,
          };
        case "INCREMENT":
          return{
             ...state,
             PCQuantity : state.PCQuantity + 1,
          };
        case "DECREMENT":
          return{
             ...state,
             PCQuantity : state.PCQuantity - 1,
          };
      
        default :
        return state
      }
  };

 const [state, dicpatch]= useReducer(reducer, initialState);


  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(state);
  }

  let Button;

  if (state.term) {
    Button = <button className="bg-blue-500 p-2 rounded mt-5 hover:p-2 hover:bg-green-500" type="submit"
        >Submit</button>
  } else {
    Button = <button className="bg-red-500 p-2 rounded mt-5" type="submit" title="Click Agree Button" disabled
        >You agree?</button>
  }


  return (
    <section className="w-[600px]">
      <div className="border-black rounded shadow-xl border-2 p-5 font-semibold font-mono">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-5 justify-center">
          <div>
             <div>
               <label className="text-2xl" htmlFor="fname">First name:</label><br />
               <input className="border-2 border-rose-600 p-1" type="text" id="fname" name="fname" placeholder="your first name" 
               onBlur={(e)=> dicpatch({type: "INPUT", payload: {name: e.target.name, value : e.target.value}})}
               />
             </div>
            <div>
              <label className="text-2xl"  htmlFor="email">Email:</label><br />
              <input className="border-2 border-rose-600 p-1" type="text" id="email" name="email" placeholder="Your email" 
              onBlur={(e)=> dicpatch({type: "INPUT", payload: {name: e.target.name, value : e.target.value}})}
              />
            </div>
            <div>
              <label className="text-2xl"  htmlFor="password">Password:</label><br />
              <input className="border-2 border-rose-600 p-1" type="text" id="password" name="password" placeholder="Your password" 
              onBlur={(e)=> dicpatch({type: "INPUT", payload: {name: e.target.name, value : e.target.value}})}
              />
            </div>
          
            <div>
             <p className="text-2xl">Gender:</p>
                <div className="flex gap-2">
                  <div className="flex gap-2">
                    <input type="radio" id="male" name="gender" value="male" 
                    onClick={(e)=> dicpatch({type: "INPUT", payload: {name: e.target.name, value : e.target.value}})}
                    />
                    <label htmlFor="male">Male</label>
                  </div>
                  <div className="flex gap-2">
                    <input type="radio" id="female" name="gender" value="female"
                    onClick={(e)=> dicpatch({type: "INPUT", payload: {name: e.target.name, value : e.target.value}})}
                    />
                    <label htmlFor="female">Female</label>
                  </div>
                  <div className="flex gap-2">
                   <input type="radio" id="other" name="gender" value="other" 
                   onClick={(e)=> dicpatch({type: "INPUT", payload: {name: e.target.name, value : e.target.value}})}
                   />
                    <label htmlFor="other">Other</label>
                  </div>
                </div>
            </div>
            <div>
               <input type="checkbox" id="terms" name="term"
               onClick={()=> dicpatch({type: "TOGGLE"})}
               />
               <label htmlFor="terms" className="ml-2">I agree to terms and conditions</label>
            </div>
          </div>

          <div>
              <div>
                <label className="text-2xl"  htmlFor="lname">Last name:</label><br />
                <input className="border-2 border-rose-600 p-1" type="text" id="lname" name="lname" placeholder="Your last name" 
                onBlur={(e)=> dicpatch({type: "INPUT", payload: {name: e.target.name, value : e.target.value}})}
                />
              </div>
              <div>
                 <label className="text-2xl" htmlFor="education">Education:</label><br />
                 <select name="education" id="education" className="border-2 border-rose-600 p-1"
                 onBlur={(e)=> dicpatch({type: "INPUT", payload: {name: e.target.name, value : e.target.value}})}
                 >
                   <option value="SSC">SSC</option>
                   <option value="HSC">HSC</option>
                   <option value="Diploma Engineering">Diploma Engineering</option>
                   <option value="Graduat">Graduat</option>
                 </select>
              </div>

              <div>
                  <p className="text-2xl">Number of PCs:</p>
                  <div className="flex items-center justify-between border-2 border-rose-600">
                     <button
                       className="bg-blue-500 px-3 py-1 text-3xl font-semibold"
                       onClick={()=> dicpatch({type: "DECREMENT"})}
                     >
                       -
                     </button>
                     <h1 className="text-3xl font-bold">{state.PCQuantity}</h1>
                     <button
                       className="bg-red-500 px-3 py-1 text-3xl font-semibold"
                       onClick={()=> dicpatch({type: "INCREMENT"})}
                     >
                       +
                     </button>
                  </div>
              </div>

              <div>
                <label className="text-2xl" htmlFor="feedback">Feedback:</label> <br />
                <textarea id="feedback" name="feedback" className="border-2 border-rose-600 p-1" placeholder="feedback"
                onBlur={(e)=> dicpatch({type: "INPUT", payload: {name: e.target.name, value : e.target.value}})}
                ></textarea>
              </div>
          </div>
        </div>
        {Button}
      </form>
      </div>
    </section>
  );
}

export default App;
