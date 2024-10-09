import React from 'react'
import NewProductCategoryCard from '../Cards/NewProductCategoryCard'


const DUMMYDATA = [
  {
    title: "iPhones",
    image: "https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D3840/https://images.ctfassets.net/mmeshd7gafk1/5BB0e2ruosL8c7yuCNzrGA/204d49ce0e3ce63a55ff8a61990fb7af/iphone_XR.jpeg"
  },
  {
    title: "Smartphones",
    image: "https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D3840/https://images.ctfassets.net/mmeshd7gafk1/5pb4SPz2VcnDtXgaJxOvLR/6ea23ef48c551778cf1b9d31b59af58e/Samsung_Galaxy_S10_.jpg"
  },
  {
    title: "Laptops",
    image: "https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D3840/https://images.ctfassets.net/mmeshd7gafk1/KQmrFTTS0O11Ck8Iw0CNs/ee0cced4bdd358b1ce3db349591bd3e7/MacBook_M1.png"
  },
  {
    title: "Tablets",
    image: "https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D3840/https://images.ctfassets.net/mmeshd7gafk1/7njvtzlzSDJkzMQnDmmujF/5c703d207b6406a96ee7c409af5e2fde/ipad_pro_2022__2_.png"
  },
  {
    title: "Game Consoles",
    image: "https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D3840/https://images.ctfassets.net/mmeshd7gafk1/6cwh4PKpCKItEKtyW9J3JJ/54098200a5429b9db0dfe74531afef3e/EARTHSHOP-PS43-CATEGORYBLOCK.jpg"
  },
  {
    title: "Others",
    image: "https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D3840/https://images.ctfassets.net/mmeshd7gafk1/2Wc6c12TSDKN5kE8IodYpl/fd6ee95413537f5ecf8ac7380b829e5d/Sennheiser-headphones.jpeg"
  },

]

const RenderTradeInCategory = () => {
  return (
    <div className='mt-14 px-4 w-full max-w-6xl mx-auto'>
      <p className='text-base text-black font-medium'>
        Choose the device you want to sell:
      </p>


      <div className='mt-5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
        {DUMMYDATA?.map((item) => <NewProductCategoryCard key={item?.title}
          name={item?.title}
          description=''
          imageUrl={item?.image}
          linkUrl={`/trade-in/${item?.title}`}
        />)}
      </div>

    </div>
  )
}

export default RenderTradeInCategory