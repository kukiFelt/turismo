
export default function Panel(){
    return(
        <><div className="mt-8 mx-4 grid gap-3 grid-cols-2 justify-items-center justify-evenly lg:grid-cols-3">
            <a href="#">
                <div className="">
                    <img src="/img/01.png" alt="" />
                    <div>
                        <h1 className="font-bold">Switzerland - 7 Days</h1>
                        <p className="text-orange-500 font-bold">$270</p>
                    </div>
                </div>
            </a>
            <a href="#">
                <div className="">
                    <img src="/img/02.png" alt="" />
                    <div>
                        <h1 className="font-bold">St. Mortiz Ski Package</h1>
                        <p className="text-orange-500 font-bold">$450</p>
                    </div>
                </div>
            </a>
            <a href="#">
                <div className="">
                    <img src="/img/03.png" alt="" />
                    <div>
                        <h1 className="font-bold">Big in Japan</h1>
                        <p className="text-orange-500 font-bold">$522</p>
                    </div>

                </div>
            </a>
            <a href="#">
                <div className="">
                    <img src="/img/04.png" alt="" />
                    <div>
                        <h1 className="font-bold">Japan Subway Ticket</h1>
                        <p className="text-orange-500 font-bold">$255</p>
                    </div>
                </div>
            </a>
            <a href="#">
                <div className="">
                    <img src="/img/05.png" alt="" />
                    <div>
                        <h1 className="font-bold">Helicopter Flight</h1>
                        <p className="text-orange-500 font-bold">$250</p>
                    </div>
                </div>
            </a>
            <a href="#">
                <div className="">
                    <img src="/img/06.png" alt="" />
                    <div>
                        <h1 className="font-bold">Snirkeling Adventure</h1>
                        <p className="text-orange-500 font-bold">$412</p>
                    </div>
                </div>
            </a>

        </div>
            <div className="justify-itens-center">
                <button className=" bg-green-500 text-white text-xs p-2 mt-4">VIEW ALL</button>
            </div></>
    )
    // mt-8 ESPACAMENTO DA IMAGEM
}