import Link from "next/link";
import MyMenu from "../Menu";

const NavBar = () => {
    return (
        <>

        <header>
        <div>
        <Link href="/">
            <a><h1>Home page</h1></a>
        </Link>
        </div>
        <div>
        <MyMenu />
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
            font-size:1.5rem;
            font-weight:bold;
        }

        div{
            margin-left: 3rem;
            margin-right:3rem
        }

        `}
        </style>
        </>
    );
};

export default NavBar;

