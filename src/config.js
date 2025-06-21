import React from "react";

const config = {
  ROMS: {
    mario1: {
      name: "Super Mario Brothers 1",
      description: (
        <span>
          Super Mario Brothers 3 Nintendo
        
          </span>
      ),
      url: "/roms/SuperMario/mario1.nes"
    },
    mario3: {
      name: "Super Mario Brothers 3",
      description: (
        <span>
          Super Mario 3 Nintendo
        
          </span>
      ),
      url: "/roms/SuperMario/mario3.nes"
    },
	
    contra: {
      name: "contra",
      description: (
        <span>
          contra
        
          </span>
      ),
      url: "/roms/contra/contra.nes"
    },
		
    BattleCity: {
      name: "BattleCity",
      description: (
        <span>
          BattleCity
        
          </span>
      ),
      url: "/roms/BattleCity/BattleCity.nes"
    },
	 Megaman2: {
      name: "Megaman2",
      description: (
        <span>
          Megaman2
        
          </span>
      ),
      url: "/roms/Megaman2/Megaman2.nes"
    },
	
	
		 LegendofZelda: {
      name: "Legend of Zelda",
      description: (
        <span>
          Legend of Zelda
        
          </span>
      ),
      url: "/roms/Legend of Zelda/Legend of Zelda.nes"
    },
	
		 DuckTales: {
      name: "Duck Tales",
      description: (
        <span>
          Duck Tales
        
          </span>
      ),
      url: "/roms/Duck Tales/Duck Tales.nes"
    },
			 excitebike: {
      name: "excite bike",
      description: (
        <span>
          excite bike
        
          </span>
      ),
      url: "/roms/excite bike/excite bike.nes"
    },
	
		 MightyFinalFight: {
      name: "Mighty Final Fight",
      description: (
        <span>
         Mighty Final Fight
        
          </span>
      ),
      url: "/roms/Mighty Final Fight/Mighty Final Fight.nes"
    },
	
	 tetris2: {
      name: "tetris2",
      description: (
        <span>
         tetris2
        
          </span>
      ),
      url: "/roms/tetris2/tetris2.nes"
    },

	   CobraTriangle: {
      name: "CobraTrianle",
      description: (
        <span>
         Cobra Triangle
        
          </span>
      ),
      url: "/roms/lj65/Cobra Triangle.nes"
    },
	
  },
  GOOGLE_ANALYTICS_CODE: process.env.REACT_APP_GOOGLE_ANALYTICS_CODE,
  SENTRY_URI: process.env.REACT_APP_SENTRY_URI
};

export default config;
