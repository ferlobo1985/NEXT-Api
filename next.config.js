/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase,{ defaultConfig }) => {

  // console.log(defaultConfig)

  if(phase === PHASE_DEVELOPMENT_SERVER){
    return {
      reactStrictMode:false,
      env:{
        SITE_ARGS:'dog'
      },
      //basePath:'/clown'
      // async redirects(){
      //   return [
      //     {
      //       source:'/posts',
      //       destination:'/',
      //       permanent:false,
      //     }
      //   ]
      // },
      async headers(){
        return[
          {
            source:'/posts',
            headers:[
              {
                key:'x-awesome',
                value:'My awesome value'
              }
            ]
          }
        ]
      }
    }
  }


  return {  
    /// NOT development
  }
}
