
import { useEffect } from 'react';
import '../diagrams.css'
import img1 from '../../../../../photo/niedowaga.jpg'
import img2 from '../../../../../photo/norma.jpg'
import img3 from '../../../../../photo/nadwaga.jpg'
import img4 from '../../../../../photo/duzanadwaga.jpg'
import img5 from '../../../../../photo/bardzoduzaNadwaga.jpg'
import img6 from '../../../../../photo/megaNadwaga.jpg'
import { Margin } from '@mui/icons-material';
const images = [
  {
    url: img1,
    title: 'Niedowaga',
    width: '10%',
    isDefault: false,
  },
  {
    url: img2,
    title: 'Norma',
    width: '10%',
    isDefault: false,

  },

  {
    url: img3,
    title: 'Nadwaga',
    width: '10%',
    isDefault: false,

  },
  {
    url: img4,
    title: 'Nadwaga I stopnia',
    width: '10%',
    isDefault: false,

  },
  {
    url: img5,
    title: 'Nadwaga II stopnia',
    width: '10%',
    isDefault: false,

  },
  {
    url: img6,
    title: 'Nadwaga III stopnia',
    width: '10%',
    isDefault: false,

  },

];

const BMIDiagram = (props) => {

  const { weight, height, ibw, bmi } = props.data

  useEffect(() => {
    localStorage.setItem('userHeight', height);
    localStorage.setItem('userWeight', weight);
  }, [weight, height])


  function setIbw(bmi) {
    let index = parseFloat(localStorage.getItem('index')) || 0;

    if (index < 0) {
      index = 0;
    } else if (index >= images.length) {
      index = images.length - 1;
    }

    if (bmi < 18.5) {
      index = 0;
    } else if (bmi >= 18.5 && bmi < 24.9) {
      index = 1;
    } else if (bmi >= 25 && bmi < 29.9) {
      index = 2;
    } else if (bmi >= 30 && bmi < 34.9) {
      index = 3;
    } else if (bmi >= 35 && bmi < 39.9) {
      index = 4;
    } else if (bmi > 40) {
      index = 5;
    }

    localStorage.setItem('index', index);

    images.forEach((image, i) => {
      image.isDefault = i === index;
    });
  }

  setIbw(bmi);






  const asignToGroup = (bmi) => {
    if (bmi < 18.5) {
      return 'Niedowaga'
    }
    if (bmi > 18.5 && bmi < 25) {
      return 'Norma'
    }
    if (bmi > 25 && bmi < 30) {
      return 'Nadwaga'
    }
    if (bmi > 30 && bmi < 35) {
      return 'Otyłość'
    }
    return 'Otyłość kliniczna'
  }
  let wynik = asignToGroup(bmi)

  function placeUserValues() {
    const savedHeight = parseFloat(localStorage.getItem('userHeight'));
    const savedWeight = parseFloat(localStorage.getItem('userWeight'));


    const chart = document.getElementById('chart');

    if (!chart) {
      console.error('Chart element not found.');
      return;
    }
console.log(savedHeight)
    let ysum = (((savedHeight) - 1.43) / 0.47) * 395
      ;
    ysum = Math.abs(ysum - 365);
    let yMark = ysum + chart.offsetTop + 37;

    let xsum = (((savedWeight) - 36) / 88) * 600;
    let xMark = xsum + chart.offsetLeft + 32;
    yMark = yMark ;
    xMark = xMark - 21;


    let x = document.getElementById('x');

    x.style.position = "absolute";
    x.style.top = yMark + "px";
    x.style.left = xMark + "px";
    x.style.fontSize = "20px";
    x.style.fontWeight = "bold";
    x.style.display = "inline-block";

  }
  useEffect(() => {
    placeUserValues();

  })



  return (
    <div>
      <h4 className='diagrams-desc'>BMI  {bmi}</h4>
      <h3></h3>
      <div>
        <div id="graphic-container">
          <img id="chart" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/BMI_chart.png" alt="BMI chart" width="650px" />
          <span id="x">&#10060;</span>
        </div>
      </div>
      <div className="image-container">
        {images.map((image, index) => (
          image.isDefault ? (
            <img
              key={index}
              src={image.url}
              alt="ibm indicator"
              className="image-item-unblured"
            />
          ) : (
            <img
              key={index}
              src={image.url}
              alt="ibm indicator"
              className="image-item-blured" />
          )
        ))}
      </div>

    </div>
  )
}

export default BMIDiagram