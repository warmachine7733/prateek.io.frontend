import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import particlesOptions from "../../assets/particles.json";
import { useDispatch } from "react-redux";
import { setGlobalLoader } from "../../store/home/action";


function ParticlesWrap() {
  const [init, setInit] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (init) {
      dispatch(setGlobalLoader(true));
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
      dispatch(setGlobalLoader(true));
    });
  }, [init, dispatch]);

  return <div className=""> {<Particles options={particlesOptions} />}</div>;
}

export default ParticlesWrap;
