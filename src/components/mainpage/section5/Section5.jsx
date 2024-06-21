import React from 'react'
import './Section5.css'
import Megabox from './Megabox'
import logo from '../../../images/main-logo.png'
import stocksAndFundslogoImg from '../../../images/stocks-and-funds.png'
import sideImg from '../../../images/sincere-bank.jpg'
import savingImg from '../../../images/long-term-saving.jpg'
import insuranceIconImg from '../../../images/trustpay-insurance.png'
import insuranceSideImg from '../../../images/insurance.jpg'
import personalLoanSideImg from '../../../images/personal-loan.jpg'
import graySpikeImg from '../../../images/gray-spike.avif'
import personalLoanImg from '../../../images/personal-loan.jpg'

function Section5() {
    return (
        <section className='section5-wrapper'>

            <h1>Financial Services by TrustPay</h1>

            <div className="cont-wrapper" style={{ background: "white" }}>
                <div className="section5-container">
                    <Megabox
                        iconURL={logo}
                        heading={"India's most sincere bank."}
                        para={"TrustPay Payments Bank offers secure, transparent and risk-free banking at your fingertips. With instant account opening, virtual debit card and zero balance requirements, experience the future of banking today."}
                        sideImageURL={sideImg} />
                </div>
            </div>

            <div className="cont-wrapper" style={{ backgroundImage: {graySpikeImg}, backgroundSize: "cover", backgroundClip: "content-box", backgroundColor: "#f5f7fa" }}>
                <div className="section5-container">
                    <Megabox
                        iconURL={stocksAndFundslogoImg}
                        heading={"Build Long-term Wealth & Achieve your Goals."}
                        para={"Investing on TrustPay Money is transparent, low-cost and commission-free. Buy stocks & mutual funds that can help you create wealth & realise your dreams."}
                        sideImageURL={savingImg}
                        right={true} />
                </div>
            </div>

            <div className="cont-wrapper" style={{ background: "white" }}>
                <div className="section5-container">
                    <Megabox
                        iconURL={insuranceIconImg}
                        heading={"Insurance made easy."}
                        para={"Buying insurance does not have to be tedious, time-consuming & confusing. TrustPay Insurance removes the worry of getting insured by making it simple, convenient & easy-to-understand."}
                        sideImageURL={insuranceSideImg} />
                </div>
            </div>

            <div className="cont-wrapper" style={{ background: "#f5f7fa" }}>
                <div className="section5-container">
                    <Megabox
                        iconURL={personalLoanImg}
                        heading={"Get a Personal Loan in 2 Minutes."}
                        para={"TrustPay offers India's quickest multi-purpose, hassle-free loan. It is 100% digital, transparent and paperless."}
                        sideImageURL={personalLoanSideImg}
                        right={true} />
                </div>
            </div>


        </section>
    )
}

export default Section5
