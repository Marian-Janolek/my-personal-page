import styled from 'styled-components';
import CircleProgressBar from '../components/CircleProgressBar';
import { skillsBar, skillsBar2 } from '../utils/constants';
import LinearProgressBar from '../components/LinearProgressBar';
import GitHubCalendar from 'react-github-calendar';
import ViewPortHeading from '../components/Heading';

const MySkillsPage = () => {
  return (
    <Wrapper className="wrapper-p">
      <ViewPortHeading text="My Skills" />
      <div className="container">
        <div className="linear-skills">
          {skillsBar2.map((skill) => (
            <LinearProgressBar
              key={skill.id}
              title={skill.title}
              percentage={skill.percentage}
            />
          ))}
        </div>
        <div className="circle-skills">
          {skillsBar.map((skill) => (
            <CircleProgressBar
              key={skill.id}
              percentage={skill.percentage}
              title={skill.title}
            />
          ))}
        </div>
      </div>
      <GitHubCalendar
        username="Marian-Janolek"
        hideTotalCount
        hideColorLegend
        blockSize={20}
        blockMargin={5}
        color="#4b00b3"
        fontSize={15}
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  &:after {
    margin-top: 0.5rem;
  }
  .container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  .linear-skills {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-flex: 3;
    -ms-flex: 3;
    flex: 3;
  }
  .circle-skills {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 2;
    -ms-flex: 2;
    flex: 2;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    gap: 1rem;
  }
  @media (max-width: 768px) {
    .container {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-align: initial;
      -ms-flex-align: initial;
      align-items: initial;
      margin-bottom: 1rem;
    }
    .linear-skills,
    .circle-skills {
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
    }
  }
`;

export default MySkillsPage;
