import { getSession } from 'next-auth/react';
import Home from "../components/home/Home";


function MainScreen() {

    return <Home />
}


export async function getServerSideProps(context){
    const session = await getSession({req : context.req})

    if(!session){
      return{
        redirect:{
                  destination: "/",
                  permanent:false
        }
      }
    }

    //este session no es mas que un obajeto con las cokies d ela seccion, solo se que no es undefine.

    return {
      props:{
        session
      }
    }
}

export default MainScreen;