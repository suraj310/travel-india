import React from 'react';
import './SelectsStyles.css';
import SelectsImg from '../SelectsImg/SelectsImg';

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



function Selects() {
    return (
        <div name='views' className='selects'>
            <div className='container'>
                 <SelectsImg bgImg={KAZIRANGA} text ='Assam' stext='kaziranga national park' link="https://tourism.assam.gov.in/portlets/tour-packages-0"/>
                <SelectsImg bgImg={Tirupati} text='Andhra Pardesh' stext='Tirupati,Sri Venkateswara Swamy Vaari Temple' link="http://www.aptourism.gov.in/destinations/"/>
                <SelectsImg bgImg={BODHGAYA} text='Bihar' stext='The Great Buddha Statue' link="http://bstdc.bihar.gov.in/"/>
                <SelectsImg bgImg={BAENAWAPARA} text='Chhattisgarh'stext='Baenawapara wildlife sanctuary' link="https://www.chhattisgarhtourism.in/"/>
                <SelectsImg bgImg={GOA} text='Goa Beach' link = "https://goa-tourism.com/beach"/>
                <SelectsImg bgImg={stateofUnity} text='Gujrat' stext='Statue Of Unity' link="https://www.tourmyindia.com/states/gujarat/" />
                <SelectsImg bgImg={PANIPAT} text='Haryana' stext='Panipat is known for the three historical battles' link ="https://haryana.gov.in/places-centres/" />
                <SelectsImg bgImg={manali} text='Himachal pradesh' stext='Manali Hill Station' link = "https://himachaltourism.gov.in/destination/"/>
                <SelectsImg bgImg={BABADHAM} text='Jharkhand' stext='Baba Baidyanath Temple' link = "https://www.tripadvisor.in/Attractions-g297626-Activities-Jharkhand.html"/>
                <SelectsImg bgImg={HAMPI} text='Karnataka'stext='Hampi is a UNESCO World Heritage Site, owing to the ancient temples and forts.' link = "https://www.karnatakatourism.org/blogs/"/>
                <SelectsImg bgImg={KOCHI} text='Kerala' stext='Kochi,The Queen of the Arabian Sea' link = "https://www.keralatourism.org/destination/"/>
                <SelectsImg bgImg={khajuraho} text='Madhya pradesh'stext='Khajuraho temples' link ="https://www.mptourism.com/"/>
                <SelectsImg bgImg={Gateway} text='Maharashtra'stext='Gateway Of India' link = "https://www.maharashtratourism.gov.in/"/>
                <SelectsImg bgImg={DZOKOU} text='Manipur'stext='Dzukou Valley  is known for its natural environment, seasonal flowers and flora & fauna' link = "http://www.manipurtourism.gov.in/nature-and-wildlife/"/>
                <SelectsImg bgImg={Nohkalikai} text='Meghalaya' stext='Nohkalikai waterfalls The fourth highest waterfalls in the world' link = "https://www.meghalayatourism.in/"/>
                <SelectsImg bgImg={PHEK} text='Nagaland' stext='Phek is a hilly area rich in flora and fauna. ' link = "https://tourism.nagaland.gov.in/index.php/category/destinations/"/>
                <SelectsImg bgImg={JAGANATH} text='Odisha'stext='The Jagannath Temple is an  Hindu temple dedicated to Jagannath, a form of Vishnu' link = "https://odishatourism.gov.in/content/tourism/en.html#immersiveOdisha"/>
                {/* <SelectsImg bgImg={CHD} text='Panjab' /> */}
                <SelectsImg bgImg={rajsthan} text='Rajsthan'stext='The main attraction for travellers is the vast Thar Desert' link ="https://www.tourism.rajasthan.gov.in/tourist-destinations.html"/>
                <SelectsImg bgImg={GANGTOK} text='Sikkim'stext=' Gangtok, the capital of Sikkim, is one of the most popular hill stations in India' link = "https://www.sikkimtourism.gov.in/Public/index"/>
                <SelectsImg bgImg={TAMILOOTY} text='TamilNadu'stext='Ooty  is a popular hill station located in the Nilgiri Hills. It is popularly  called Queen of Hill Stations' link="https://www.tamilnadutourism.tn.gov.in/"/>
                <SelectsImg bgImg={BHADRACHALAM} text='Telangana'stext='Sri Raja Rajeswara Temple is the famous Hindu temples in Telangana, dedicated to Lord Shiva.' link="https://tourism.telangana.gov.in/blogpage?id=9"/>
                <SelectsImg bgImg={NEERMAHAL} text='Tripura'stext='Neermahal is a former royal palace built by Maharaja of Tripura Kingdom Bir Bikram Kishore ' link="https://tripuratourism.gov.in/"/>
                <SelectsImg bgImg={LUCKNOW} text='Utter Pradesh' stext=' Lucknow, situated on the banks of river Gomti'link="https://www.uptourism.gov.in/en/page/upstdc" />
                <SelectsImg bgImg={MUSSOORIE} text='Uttarakhand(Mussoorie)' stext='Mussoorie has long been known as Queen of the Hills' link="https://uttarakhandtourism.gov.in/destination" />
                <SelectsImg bgImg={KOLKATA} text='West Bengal' stext = 'Howrah Bridge'link="https://wbtourism.gov.in/"/>
                <SelectsImg bgImg={BoraBora} text='Dadra and Nagar Haveli' link="https://dnh.gov.in/tourist-places/"/>
                <SelectsImg bgImg={vaishnodevi} text='Jammu and Kashmir' stext='Mata vaishno Devi Temple'link="http://jammutourism.gov.in/exploreJammu-Jammu-City.html" />
                <SelectsImg bgImg={LADAKH} text='Ladakh' stext='Ladakh is a region administered by India as a union territory'link="https://ladakh.nic.in/places-centres/"/>
                <SelectsImg bgImg={ISLANDS} text='Lakshadweep' stext='Lakshadweep also known as Laccadives is a union territory of India' link="https://lakshadweep.gov.in/tourist-places/"/>
                <SelectsImg bgImg={ANDAMAN} text='Andaman and Nicobar'stext='The Andaman Islands are an Indian archipelago in the Bay of Bengal.' link="https://www.andamantourism.gov.in/" />
                


            </div>

        </div>
    );
}

export default Selects;
