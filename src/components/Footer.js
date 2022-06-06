import React from 'react'

function Footer() {
  return (
    <>
        <div className='upperFooter'>
            <div className="textCenter">C.R.I FLUIDS SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</div>
            <p>CHEMICALS & PROCESS<span>|</span>POWER<span>|</span>WATER & WASTER WATER<span>|</span>OILS & GAS<span>|</span>PHARMA<span>|</span>SUGARS & DISTILLERIES<span>|</span>PAPER & PULP<span>|</span>MARINE & DEFENCE<span>|</span>METAL & MINING<span>|</span>FOOD & BEVERAGE<span>|</span>PERTOCHEMICAL & REFINERIES<span>|</span>SOLAR<span>|</span>BUILDING<span>|</span>HVAC<span>|</span>FIRE FIGHTING<span>|</span>AGRICULTURE & RESIDENTIAL</p>
        </div>
        <div className="footerBox">
            <div className='innerBox'>
                <span><i class="fa fa-phone" aria-hidden="true"></i></span>
                <a href='#'>Toll free 1800 200 1234</a>
            </div>
            <div className='innerBox'>
                <span><i class="fa fa-facebook" aria-hidden="true"></i></span>
                <a href='www.facebook.com/cripumps' target='_blank'>www.facebook.com/cripumps</a>
            </div>
            <div className='innerBox'>
                <span><i class="fa fa-globe" aria-hidden="true"></i></span>
                <a href='www.crigroups.com' target='_blank'>www.crigroups.com</a>
            </div>
        </div>
    </>
  )
}

export default Footer