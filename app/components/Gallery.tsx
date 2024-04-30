

export default function Gallery(){
    return(
        <div>
            <div className="mt-4">
                <h2 className="text-orange-500">Our Tour</h2>
                <h1 className="font-bold mt-2">Gallery</h1>
                <div className="grid grid-cols-11">
                    <div className="mt-3 border-t-2 border-orange-500 col-start-6 col-end-7"></div>
                </div>            
            </div>
            <div className="mt-4 grid grid-cols-2 justify-items-center lg:grid-cols-4 gap-1">
                <div>
                    <img src="/img/001.jpg" alt="" />
                </div>
                <div>
                    <img src="/img/002.jpg" alt="" />
                </div>
                <div>
                    <img src="/img/003.jpg" alt="" />
                </div>
                <div>
                    <img src="/img/004.jpg" alt="" />
                </div>
                <div>
                    <img src="/img/005.jpg" alt="" />
                </div>
                <div>
                    <img src="/img/006.jpg" alt="" />
                </div>
                <div>
                    <img src="/img/007.jpg" alt="" />
                </div>
                <div>
                    <img src="/img/008.jpg" alt="" />
                </div>
                <div>
                    <img src="/img/009.jpg" alt="" />
                </div>
                <div>
                    <img src="/img/010.jpg" alt="" />
                </div>
                <div>
                    <img src="/img/011.jpg" alt="" />
                </div>
                <div>
                    <img src="/img/012.jpg" alt="" />
                </div>
            </div>

        </div>
    )
    // justify-items-center  CENTRALIZA OS ITENS
}