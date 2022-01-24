import styled from 'styled-components';
import { useThemeContext } from '../context/themeContext';

const TimeCard = ({ timeline }) => {
  const { languageSK, darkMode } = useThemeContext();
  return (
    <Wrapper darkMode={darkMode}>
      <div className="main-timeline">
        {timeline.map((item) => (
          <div className="timeline" key={item.id}>
            <div className="timeline-content">
              <div className="timeline-year">
                {item.year[0]}
                <span style={{ fontSize: '18px' }}>{item?.year[1]}</span>
              </div>
              <div className="timeline-icon">
                <i className="fa fa-globe"></i>
              </div>
              <h3 className="title">
                {languageSK ? item.title[1] : item.title[0]}
              </h3>
              <span className="description">
                {languageSK ? item.descSK : item.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .main-timeline {
    font-family: 'Poppins', sans-serif;
  }
  .main-timeline:after {
    content: '';
    display: block;
    clear: both;
  }
  .main-timeline .timeline {
    width: calc(50% + 65px);
    padding: 0 123px 0 0;
    float: left;
  }
  .main-timeline .timeline-content {
    color: #f63959;
    background: -webkit-gradient(
      linear,
      left bottom,
      left top,
      color-stop(50%, transparent),
      color-stop(50%, #f63959)
    );
    background: -o-linear-gradient(bottom, transparent 50%, #f63959 50%);
    background: linear-gradient(to top, transparent 50%, #f63959 50%);
    text-align: center;
    min-height: 170px;
    padding: 15px;
    border-radius: 40px;
    display: block;
    position: relative;
    z-index: 1;
    box-shadow: ${(props) =>
      props.darkMode
        ? `none`
        : `12px 12px 16px 0 rgba(0, 0, 0, 0.25),
      -8px -8px 12px 0 rgba(255, 255, 255, 0.3)`};
    -webkit-box-shadow: ${(props) =>
      props.darkMode
        ? `none`
        : `12px 12px 16px 0 rgba(0, 0, 0, 0.25),
      -8px -8px 12px 0 rgba(255, 255, 255, 0.3)`};
  }
  .main-timeline .timeline-content:before {
    content: '';
    background-color: ${(props) => (props.darkMode ? '#2b2b2b' : '#fff')};
    border-radius: 35px;
    position: absolute;
    left: 7px;
    right: 7px;
    top: 7px;
    bottom: 7px;
    z-index: -1;
  }
  .main-timeline .timeline-content:hover {
    text-decoration: none;
  }
  .main-timeline .timeline-year {
    color: ${(props) =>
      props.darkMode ? 'var(--gray-color)' : 'var(--secondary-color)'};
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(50%, transparent),
      color-stop(50%, #f63959)
    );
    background: -o-linear-gradient(transparent 50%, #f63959 50%);
    background: linear-gradient(transparent 50%, #f63959 50%);
    font-size: 33px;
    height: 130px;
    width: 130px;
    border-radius: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    position: absolute;
    right: -123px;
    top: 50%;
    z-index: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;
  }
  .main-timeline .timeline-year:before {
    content: '';
    background-color: #f63959;
    border-radius: inherit;
    border: ${(props) =>
      props.darkMode ? '10px solid #2b2b2b' : '10px solid #fff'};
    position: absolute;
    left: 7px;
    right: 7px;
    top: 7px;
    bottom: 7px;
    z-index: -1;
    box-shadow: ${(props) =>
      props.darkMode
        ? `none`
        : `12px 12px 16px 0 rgba(0, 0, 0, 0.25),
      -8px -8px 12px 0 rgba(255, 255, 255, 0.3)`};
    -webkit-box-shadow: ${(props) =>
      props.darkMode
        ? `none`
        : `12px 12px 16px 0 rgba(0, 0, 0, 0.25),
      -8px -8px 12px 0 rgba(255, 255, 255, 0.3)`};
    -webkit-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;
  }
  .main-timeline .timeline-icon {
    font-size: 35px;
  }
  .main-timeline .title {
    font-size: 20px;
    font-weight: 500;
    text-transform: capitalize;
    margin: 0 0 8px;
  }
  .main-timeline .description {
    color: #777;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.5px;
    line-height: 18px;
    margin: 0;
  }
  .main-timeline .timeline:nth-child(even) {
    padding: 0 0 0 123px;
    float: right;
  }
  .main-timeline .timeline:nth-child(even) .timeline-year {
    right: auto;
    left: -123px;
  }
  .main-timeline .timeline:nth-child(4n + 2) .timeline-content {
    color: #4c39d3;
    background: -webkit-gradient(
      linear,
      left bottom,
      left top,
      color-stop(50%, transparent),
      color-stop(50%, #4c39d3)
    );
    background: -o-linear-gradient(bottom, transparent 50%, #4c39d3 50%);
    background: linear-gradient(to top, transparent 50%, #4c39d3 50%);
    border-color: #4c39d3;
  }
  .main-timeline .timeline:nth-child(4n + 2) .timeline-year {
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(50%, transparent),
      color-stop(50%, #4c39d3)
    );
    background: -o-linear-gradient(transparent 50%, #4c39d3 50%);
    background: linear-gradient(transparent 50%, #4c39d3 50%);
  }
  .main-timeline .timeline:nth-child(4n + 2) .timeline-year:before {
    background: #4c39d3;
  }
  .main-timeline .timeline:nth-child(4n + 3) .timeline-content {
    color: #fc562e;
    background: -webkit-gradient(
      linear,
      left bottom,
      left top,
      color-stop(50%, transparent),
      color-stop(50%, #fc562e)
    );
    background: -o-linear-gradient(bottom, transparent 50%, #fc562e 50%);
    background: linear-gradient(to top, transparent 50%, #fc562e 50%);
    border-color: #fc562e;
  }
  .main-timeline .timeline:nth-child(4n + 3) .timeline-year {
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(50%, transparent),
      color-stop(50%, #fc562e)
    );
    background: -o-linear-gradient(transparent 50%, #fc562e 50%);
    background: linear-gradient(transparent 50%, #fc562e 50%);
  }
  .main-timeline .timeline:nth-child(4n + 3) .timeline-year:before {
    background: #fc562e;
  }
  .main-timeline .timeline:nth-child(4n + 4) .timeline-content {
    color: #358ae6;
    background: -webkit-gradient(
      linear,
      left bottom,
      left top,
      color-stop(50%, transparent),
      color-stop(50%, #358ae6)
    );
    background: -o-linear-gradient(bottom, transparent 50%, #358ae6 50%);
    background: linear-gradient(to top, transparent 50%, #358ae6 50%);
    border-color: #358ae6;
  }
  .main-timeline .timeline:nth-child(4n + 4) .timeline-year {
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(50%, transparent),
      color-stop(50%, #358ae6)
    );
    background: -o-linear-gradient(transparent 50%, #358ae6 50%);
    background: linear-gradient(transparent 50%, #358ae6 50%);
  }
  .main-timeline .timeline:nth-child(4n + 4) .timeline-year:before {
    background: #358ae6;
  }
  @media (max-width: 767px) {
    .main-timeline .timeline {
      width: 100%;
      margin: 0 0 30px;
    }
  }
  @media (max-width: 576px) {
    .main-timeline .timeline,
    .main-timeline .timeline:nth-child(even) {
      padding: 123px 0 0 0;
    }
    .main-timeline .timeline-year {
      font-size: 25px;
    }
    .main-timeline .title {
      font-size: 18px;
    }
    .main-timeline .timeline-year,
    .main-timeline .timeline:nth-child(even) .timeline-year {
      -webkit-transform: translateY(0) translateX(-50%);
      -ms-transform: translateY(0) translateX(-50%);
      transform: translateY(0) translateX(-50%);
      left: 50%;
      right: auto;
      top: -123px;
    }
  }
  @media (max-width: 290px) {
    .main-timeline .description {
      font-size: 0.8rem;
    }
  }
`;

export default TimeCard;
