
function App() {

  return (
     <>
      <div className={'flex justify-evenly mt-[117px] desktop:mt-12 font-spartan text-custom-2 desktop:flex-col desktop:items-center'}>

         {/* FIRST ROW LEFT SIDE */}
         <div className={'ml-[76px] desktop:ml-0 desktop:text-center'}>
            <h1 className={'text-[56px] text-custom3 font-bold -tracking-[2px] w-[350px] desktop:w-full leading-[48px] mobile:w-full'}>10,000+ of our <br className={'mobile:hidden'} /> users love our</h1><h1 className={'text-[56px] font-bold -tracking-[2px] w-[350px] mobile:w-full desktop:w-full leading-[46px] mt-[1px] text-custom3'}>products.</h1>
            <p className={'w-[420px] text-custom2 font-[500] text-lg mt-[28px] text-[19px] ml-[1px] text-custom2 track-p leading-[25px] mobile:w-full'}>We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>
         </div>

         {/* FIRST ROW RIGHT SIDE */}
         <div className={'w-[42%] desktop:w-full mt-[3px] flex flex-col justify-around ml-[40px] desktop:ml-0'}>

            <div className="flex justify-start items-center bg-custom2/10 w-[445px] desktop:w-[50%] mobile:w-[90%] self-start desktop:self-center ml-[21px] desktop:ml-0 py-[16px] rounded-[9px] mt-[16px] desktop:flex-col desktop:justify-between">
               <div className="flex">
                  <img src="/public/images/icon-star.svg" alt="a" className={'w-[17px] h-[17px] ml-[32px] mr-[8px]'} />
                  <img src="/public/images/icon-star.svg" alt="a" className={'w-[17px] h-[17px] mr-[8px]'} />
                  <img src="/public/images/icon-star.svg" alt="a" className={'w-[17px] h-[17px] mr-[8px]'} />
                  <img src="/public/images/icon-star.svg" alt="a" className={'w-[17px] h-[17px] mr-[8px]'} />
                  <img src="/public/images/icon-star.svg" alt="a" className={'w-[17px] h-[17px] mr-[32px]'} />
               </div>
                  <p className={'text-custom3 font-bold text-[17px] translate-y-[1px] desktop:mt-[10px]'}>Rated 5 Stars in Reviews</p>
            </div>


            <div className="flex justify-start items-center bg-custom2/10 w-[445px] desktop:w-[50%] mobile:w-[90%] self-center ml-[2px] desktop:ml-0 mt-[1px] py-[16px] rounded-[9px] desktop:mt-2 desktop:flex-col desktop:justify-between">
               <div className="flex">
                  <img src="/public/images/icon-star.svg" alt="a" className={'w-[17px] h-[17px] ml-[32px] mr-[8px]'} />
                  <img src="/public/images/icon-star.svg" alt="a" className={'w-[17px] h-[17px] mr-[8px]'} />
                  <img src="/public/images/icon-star.svg" alt="a" className={'w-[17px] h-[17px] mr-[8px]'} />
                  <img src="/public/images/icon-star.svg" alt="a" className={'w-[17px] h-[17px] mr-[8px]'} />
                  <img src="/public/images/icon-star.svg" alt="a" className={'w-[17px] h-[17px] mr-[32px]'} />
               </div>
               <p className={'text-custom3 font-bold text-[17px] translate-y-[1px] desktop:mt-[10px]'}>Rated 5 Stars in Report Guru</p>
            </div>


            <div className="flex justify-start items-center bg-custom2/10 w-[445px] desktop:w-[50%] mobile:w-[90%] self-end desktop:self-center py-[16px] rounded-[9px] mb-[11px] mr-[19px] desktop:mr-0 desktop:mt-2 desktop:flex-col desktop:justify-between">
               <div className="flex">
                  <img src="/public/images/icon-star.svg" alt="a" className={'w-[17px] h-[17px] ml-[32px] mr-[8px]'} />
                  <img src="/public/images/icon-star.svg" alt="a" className={'w-[17px] h-[17px] mr-[8px]'} />
                  <img src="/public/images/icon-star.svg" alt="a" className={'w-[17px] h-[17px] mr-[8px]'} />
                  <img src="/public/images/icon-star.svg" alt="a" className={'w-[17px] h-[17px] mr-[8px]'} />
                  <img src="/public/images/icon-star.svg" alt="a" className={'w-[17px] h-[17px] mr-[32px]'} />
               </div>
               <p className={'text-custom3 font-bold text-[17px] translate-y-[1px] desktop:mt-[10px]'}>Rated 5 Stars in BestTech</p>
            </div>
         </div>
      </div>


        {/*SECOND ROW*/}
        <div className="flex my-[71px] desktop:my-12 items-start justify-center ml-[45px] desktop:ml-0 desktop:flex-col desktop:items-center">

           <div className={'bg-custom3 text-custom1 px-[33px] py-[40px] rounded-[8px] w-[350px] desktop:w-[90%] mr-[10px] ml-[20px] desktop:mx-auto'}>
              <div className={'flex'}>
                 <img src="/public/images/image-colton.jpg" alt="a" className={'rounded-full w-[40px] h-[40px]'} />
                 <div className={'ml-[23px] mt-[-2px]'}>
                    <h1 className={'text-[15px] font-[700] tracking-[.3px]'}>Colton Smith</h1>
                    <p className={'text-custom4/75 text-[14px] mt-[-2px] tracking-[.7px] font-[500]'}>Verified Buyer</p>
                 </div>
              </div>

              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <p className={'mt-[28px] ml-[px] text-[16px] font-[500] tracking-[.1px] font-spartan leading-[22px]'}>" We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! "</p>
           </div>


           <div className={'bg-custom3 text-custom1 px-[33px] py-[40px] rounded-[8px] w-[350px] desktop:w-[90%] mr-[10px] ml-[20px] mt-[16px] desktop:mx-auto'}>
              <div className={'flex'}>
                 <img src="/public/images/image-irene.jpg" alt="a" className={'rounded-full w-[40px] h-[40px]'} />
                 <div className={'ml-[23px] mt-[-2px]'}>
                    <h1 className={'text-[15px] font-[700] tracking-[.3px]'}>Irene Roberts</h1>
                    <p className={'text-custom4/75 text-[14px] mt-[-2px] tracking-[.7px] font-[500]'}>Verified Buyer</p>
                 </div>
              </div>

              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <p className={'mt-[28px] ml-[px] text-[16px] font-[500] tracking-[.1px] font-spartan leading-[22px]'}>" Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the puchase and the speed delivery. "</p>
           </div>


           <div className={'bg-custom3 text-custom1 px-[33px] py-[40px] rounded-[8px] w-[350px] desktop:w-[90%] mr-[10px] ml-[20px] mt-[32px] desktop:mx-auto'}>
              <div className={'flex'}>
                 <img src="/public/images/image-anne.jpg" alt="a" className={'rounded-full w-[40px] h-[40px]'} />
                 <div className={'ml-[23px] mt-[-2px]'}>
                    <h1 className={'text-[15px] font-[700] tracking-[.3px]'}>Anne Wallace</h1>
                    <p className={'text-custom4/75 text-[14px] mt-[-2px] tracking-[.7px] font-[500]'}>Verified Buyer</p>
                 </div>
              </div>

              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <p className={'mt-[28px] ml-[px] text-[16px] font-[500] tracking-[.1px] font-spartan leading-[22px]'}>" Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! "</p>
           </div>

        </div>
     </>
  )
}

export default App
