export default function Header(){
    return(
        <div className="md:flex justify-between lg:mt-8">
            <h3>🌴Travel</h3>
            <nav className="space-x-2 mx-4">
                <a href="#">Home</a>
                <a href="#">Tour</a>
                <a href="#">Destination</a>
                <a href="#">Discounts</a>
            </nav>
        </div>
    )
    // md:flex SERVE PARA AJUSTAR TEXTO DE ACORDO RESOLUÇAO
    // lg:mt-8 MAGEM TEXTO
    // space-x-2 eSPAÇO ENTRE AS TAGS
    // mx-4 ESPAÇO HORIZONTAL
}