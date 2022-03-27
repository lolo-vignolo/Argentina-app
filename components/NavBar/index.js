import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import MyMenu from "../Menu";

const NavBar = () => {
    const { data: session, status } = useSession();

    console.log(session);
    const handleLogout = () =>{
      
        signOut();
      }

    return (
        <>

        <header>
        <div className="div-left">
        {!session && 
        <h1>Welcome</h1>
        }
        {session && 
        <Link href="/home">
            <a><h1>Home 🏠</h1></a>
        </Link>
        }
        </div>
        <div className="div-right">
        {session && 
        <button onClick={handleLogout}>Logout</button>
        }
        {session && 
        <MyMenu />
        }
        
        </div>
        
        </header>

        <style jsx>{`

        header{
            display:flex;
            background:#234E52;
            backdrop-filter: blur(5px);
            color: white;
            align-items:center;
            justify-content:space-between;
            height:4rem;
            padding:1rem;
            border-bottom: 2px solid #68D391;
            position: sticky;
            top: 0;
            width: 100%;
            z-index:3;
        }
        h1{
            font-size:1.1rem;
            font-weight:bold;
            
        }

        .div-left{
            margin-left: 2rem;
            margin-right:2rem
        }
        .div-right{
            display:flex;
            justify-content:space-between;
            align-items: center;
        }

        button{
            margin-right:1rem;
            color:#E53E3E;
            font-weight:500;
            font-size:1rem
        }


        @media (min-width:500px) {

            h1{
            font-size:2rem;
            font-weight:bold;
        }

        button{
            margin-right:1rem;
            font-weight:600;
            font-size:1.4rem
        }
   
        }

        `}
        </style>
        </>
    );
};

export default NavBar;

