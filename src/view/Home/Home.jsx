import React from 'react';
import { useTranslation } from 'react-i18next';
import BaseAdvanceAm5 from '../../components/base/BaseAm5/BaseAdvanceAm5';
import BaseBarAm5 from '../../components/base/BaseAm5/BaseBarAm5';
import BasePieAm5 from '../../components/base/BaseAm5/BasePieAm5';
import BaseAdvanceApexCharts from '../../components/base/BaseApexCharts/BaseAdvanceApexCharts';
import BaseApexCharts from '../../components/base/BaseApexCharts/BaseApexCharts';
import BaseChartjs from '../../components/base/BaseChartjs/BaseChartjs';
import BaseAdvanceIntergalactic from '../../components/base/BaseIntergalactic/BaseAdvanceIntergalactic';
import BaseIntergalactic from '../../components/base/BaseIntergalactic/BaseIntergalactic';
import BaseProAndCons from '../../components/base/BaseProAndCons/BaseProAndCons';
import BaseAdvanceFull from '../../components/base/BaseRecharts/BaseAdvanceFull';
import BaseAdvanceRecharts from '../../components/base/BaseRecharts/BaseAdvanceRecharts';
import BaseRecharts from '../../components/base/BaseRecharts/BaseRecharts';
import BaseAdvanceVictory from '../../components/base/BaseVictory/BaseAdvanceVictory';
import BaseVictory from '../../components/base/BaseVictory/BaseVictory';
import HomeStyles from './Home.module.scss';



const Home = () => {

  const { t } = useTranslation();

  const ProAm5 = [
    { id: 1, txt: 'Responsive' }
  ]
  const ConsAm5 = [
    { id: 1, txt: 'bad integration with react' }
  ]

  const ProApexCharts = [
    { id: 5, txt: 'Good documentation' },
    { id: 3, txt: 'responsive' },
    { id: 6, txt: 'Download options' },
    { id: 4, txt: 'Interactive and animated' },
    { id: 1, txt: 'many charts' },
    { id: 2, txt: 'easy to use' },
    { id: 7, txt: 'MIT license' }
  ]
  const ConsApexCharts = [
    { id: 1, txt: 'refresh to see the changes ' },
  ]


  const ProRecharts = [
    { id: 1, txt: 'ease of use' },
    { id: 2, txt: 'Good documentation' },
    { id: 3, txt: 'frequently updated library' },
    { id: 4, txt: 'responsive' }
  ]
  const ConsRecharts = [
    { id: 1, txt: 'does not include dynamic legend' },
  ]




  const ProVictory = [
    { id: 1, txt: 'Good documentation' },
    { id: 2, txt: 'frequently updated library' },
    { id: 3, txt: 'responsive' }
  ]
  const ConsVictory = [
    { id: 1, txt: 'refresh to see the changes ' },
  ]



  const ProIntergalactic = [
    { id: 1, txt: 'many components' },
    { id: 2, txt: 'MIT license' }
  ]
  const ConsIntergalactic = [
    { id: 1, txt: 'bad documentation ' },
    { id: 2, txt: 'few api' },
    { id: 3, txt: 'not responsive' }
  ]


  const ProGoogleCharts = [
    { id: 1, txt: 'proGoogle' },
    { id: 2, txt: 'pro1' }
  ]
  const ConsGoogleCharts = [
    { id: 1, txt: 'consGoogle' },
    { id: 2, txt: 'cons1' }
  ]




  return (
    <div className={HomeStyles.wrapper}>
      <div>
        <h1>{t('title')}</h1>
      </div>

      <div>
        <p>react-apexcharts</p>
        <p className='subtitle'>Weekly Downloads 249.159</p>
        <BasePieAm5 />
        <BaseBarAm5 />
        <BaseAdvanceAm5 />
        <BaseProAndCons Pro={ProAm5} Cons={ConsAm5} />
      </div>

      <div>
        <p>react-apexcharts</p>
        <p className='subtitle'>Weekly Downloads 249.159</p>
        <BaseApexCharts />
        <BaseAdvanceApexCharts />
        <BaseProAndCons Pro={ProApexCharts} Cons={ConsApexCharts} />
      </div>

      <div>
        <p>{t('Recharts')}</p>
        <p className='subtitle'>Weekly Downloads 1.063.066</p>
        <BaseRecharts />
        <BaseAdvanceRecharts />
        <BaseAdvanceFull />
        <BaseProAndCons Pro={ProRecharts} Cons={ConsRecharts} />
      </div>


      <div>
        <p>Victory</p>
        <p className='subtitle'>Weekly Downloads 205.788</p>
        <BaseVictory />
        <BaseAdvanceVictory />
        <BaseProAndCons Pro={ProVictory} Cons={ConsVictory} />
      </div>


      <div>
        <p>Intergalactic Design System</p>
        <p className='subtitle'>Weekly Downloads 3000</p>
        <BaseIntergalactic />
        <BaseAdvanceIntergalactic />
        <BaseProAndCons Pro={ProIntergalactic} Cons={ConsIntergalactic} />
      </div>

      <div>
        <p>React Google Charts</p>
        <p className='subtitle'>Weekly Downloads 80.000</p>
        <BaseChartjs />
        <BaseProAndCons Pro={ProGoogleCharts} Cons={ConsGoogleCharts} />
      </div>

    </div>
  );
};

export default Home;
