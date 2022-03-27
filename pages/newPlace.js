import { getSession } from 'next-auth/react';
import React from 'react';
import NewPlace from "../components/NewPlace/index.js"

const newPlace = () => {
    return (
        <>
        <div>
            <NewPlace />
        </div>
            <style jsx>{`
                div{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    width:100%;
                    height:90%
                }
            `}</style>
        </>
    );
};

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


export default newPlace;