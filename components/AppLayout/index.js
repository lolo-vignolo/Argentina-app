import style, { globalStyle } from "./style";


export default function AppLayout({ children }) {
    return (
      <>
    
        <div>
          <main>{children}</main>
        </div>
  
        {/* este style es el estilo de lo de arriba */}
  
        <style jsx>{style}</style>
  
        <style jsx global>
          {globalStyle}
        </style>
      </>
    );
  }