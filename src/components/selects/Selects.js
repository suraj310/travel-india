import React from 'react'
import './SelectsStyles.css'

import BoraBora from '../../Picture/borabora.jpg';
import KAZIRANGA from '../../Picture/KAZIRANGA.jpg';
import Tirupati from '../../Picture/Tirupati.jpg';
import BAENAWAPARA from '../../Picture/BAENAWAPARA.jpg';
import BODHGAYA from '../../Picture/BODHGAYA.jpg';
import GOA from '../../Picture/GOA.jpg';
import stateofUnity from '../../Picture/stateofUnity.png';
import manali from '../../Picture/manali.jpg';
import BABADHAM from '../../Picture/BABADHAM.png';
import HAMPI from '../../Picture/HAMPI.jpg';
import khajuraho from '../../Picture/khajuraho.jpg';
import Gateway from '../../Picture/Gateway.jpg';
import DZOKOU from '../../Picture/DZOKOU.jpg';
import Nohkalikai from '../../Picture/Nohkalikai.jpg';
import PHEK from '../../Picture/PHEK.jpg';
import PANIPAT from '../../Picture/PANIPAT.jpg';
import rajsthan from '../../Picture/rajsthan.jpg';
import GANGTOK from '../../Picture/GANGTOK.jpg';
import LUCKNOW from '../../Picture/LUCKNOW.jpg';
import MUSSOORIE from '../../Picture/MUSSOORIE.jpg';
import KOLKATA from '../../Picture/KOLKATA.jpg';
import vaishnodevi from '../../Picture/vaishnodevi.jpg';
import LADAKH from '../../Picture/LADAKH.jpg';
import KOCHI from '../../Picture/KOCHI.jpg';
import ISLANDS from '../../Picture/ISLANDS.jpg';
import ANDAMAN from '../../Picture/ANDAMAN.jpg';
import TAMILOOTY from '../../Picture/TAMILOOTY.jpg';
import JAGANATH from '../../Picture/JAGANATH.jpg';
import BHADRACHALAM from '../../Picture/BHADRACHALAM.jpg';
import NEERMAHAL from '../../Picture/NEERMAHAL.jpg';

 import SelectsImg from '../SelectsImg/SelectsImg'


function Selects() {
    return (
        <div name='views' className='selects'>
            <div className='container'>
                <SelectsImg bgImg={KAZIRANGA} text='Assam ' stext='kaziranga national park' />
                <SelectsImg bgImg={Tirupati} text='Andhra Pardesh' stext='Tirupati,Sri Venkateswara Swamy Vaari Temple' />
                <SelectsImg bgImg={BODHGAYA} text='Bihar' stext='The Great Buddha Statue'/>
                <SelectsImg bgImg={BAENAWAPARA} text='Chhattisgarh'stext='Baenawapara wildlife sanctuary' />
                <SelectsImg bgImg={GOA} text='Goa Beach' />
                <SelectsImg bgImg={stateofUnity} text='Gujrat' stext='Statue Of Unity' />
                <SelectsImg bgImg={PANIPAT} text='Haryana' stext='Panipat is known for the three historical battles' />
                <SelectsImg bgImg={manali} text='Himachal pradesh' stext='Manali Hill Station'/>
                <SelectsImg bgImg={BABADHAM} text='Jharkhand' stext='Baba Baidyanath Temple' />
                <SelectsImg bgImg={HAMPI} text='Karnataka'stext='Hampi is a UNESCO World Heritage Site, owing to the ancient temples and forts.' />
                <SelectsImg bgImg={KOCHI} text='Kerala' stext='Kochi,The Queen of the Arabian Sea'/>
                <SelectsImg bgImg={khajuraho} text='Madhya pradesh'stext='Khajuraho temples' />
                <SelectsImg bgImg={Gateway} text='Maharashtra'stext='Gateway Of India' />
                <SelectsImg bgImg={DZOKOU} text='Manipur'stext='Dzukou Valley  is known for its natural environment, seasonal flowers and flora & fauna' />
                <SelectsImg bgImg={Nohkalikai} text='Meghalaya' stext='Nohkalikai waterfalls The fourth highest waterfalls in the world' />
                <SelectsImg bgImg={PHEK} text='Nagaland' stext='Phek is a hilly area rich in flora and fauna. ' />
                <SelectsImg bgImg={JAGANATH} text='Odisha'stext='The Jagannath Temple is an  Hindu temple dedicated to Jagannath, a form of Vishnu' />
                {/* <SelectsImg bgImg={CHD} text='Panjab' /> */}
                <SelectsImg bgImg={rajsthan} text='Rajsthan'stext='The main attraction for travellers is the vast Thar Desert' />
                <SelectsImg bgImg={GANGTOK} text='Sikkim'stext=' Gangtok, the capital of Sikkim, is one of the most popular hill stations in India' />
                <SelectsImg bgImg={TAMILOOTY} text='TamilNadu'stext='Ooty  is a popular hill station located in the Nilgiri Hills. It is popularly  called Queen of Hill Stations' />
                <SelectsImg bgImg={BHADRACHALAM} text='Telangana'stext='Sri Raja Rajeswara Temple is the famous Hindu temples in Telangana, dedicated to Lord Shiva.' />
                <SelectsImg bgImg={NEERMAHAL} text='Tripura'stext='Neermahal is a former royal palace built by Maharaja of Tripura Kingdom Bir Bikram Kishore ' />
                <SelectsImg bgImg={LUCKNOW} text='Utter Pradesh' stext=' Lucknow, situated on the banks of river Gomti' />
                <SelectsImg bgImg={MUSSOORIE} text='Uttarakhand(Mussoorie)' stext='Mussoorie has long been known as Queen of the Hills' />
                <SelectsImg bgImg={KOLKATA} text='West Bengal' stext = 'Howrah Bridge'/>
                <SelectsImg bgImg={BoraBora} text='Dadra and Nagar Haveli' />
                <SelectsImg bgImg={vaishnodevi} text='Jammu and Kashmir' stext='Mata vaishno Devi Temple' />
                <SelectsImg bgImg={LADAKH} text='Ladakh' stext='Ladakh is a region administered by India as a union territory'/>
                <SelectsImg bgImg={ISLANDS} text='Lakshadweep' stext='Lakshadweep also known as Laccadives is a union territory of India' />
                <SelectsImg bgImg={ANDAMAN} text='Andaman and Nicobar'stext='The Andaman Islands are an Indian archipelago in the Bay of Bengal.' />
                


            </div>

        </div>
    )
}

export default Selects
