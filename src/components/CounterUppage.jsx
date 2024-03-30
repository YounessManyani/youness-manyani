import React ,{useState}from 'react';
import CountUp from'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const CounterUppage = () =>{
    const[counterOn,setCounterOn]=useState(false);
    return(
        <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
        <div style={{
            width:'100%',
            backgroundColor:'balck',
           
           marginBottom:'300px',
           color:'white',
           

        }}>
        <div className="flex flex-wrap justify-center gap-8 font-poppins">
            <h1 className="Number text-white  show text-center text-5xl font-bold">
                {counterOn && <CountUp start={0} end={100} duration={2} delay={0}/>}
                +
                <p className="text-white text-xl font-thin tracking-widest">Project complet</p>
            </h1>
            <h1 className="Number text-white text-5xl font-bold show text-center">
                {counterOn && <CountUp start={0} end={50} duration={2} delay={0}/>}
                +
                <p className="text-white text-xl font-thin tracking-widest">Compétences </p>
            </h1>
            <h1 className="Number text-white text-5xl font-bold show text-center">
                {counterOn && <CountUp start={0} end={3} duration={2} delay={0}/>}
                +
                <p className="text-white text-xl font-thin tracking-widest">Années d'expérience</p>
            </h1>
        </div>


        </div>
        </ScrollTrigger>

    );
};
export default CounterUppage