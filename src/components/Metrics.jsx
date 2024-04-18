import KeyData from '../components/KeyData'
import ScorePieChart from '../components/charts/ScorePieChart'
import Performances from '../components/charts/RadarChart'
import Weight from '../components/charts/BarChart'
import AverageSessions from '../components/charts/AverageSessions'
import User from './../datas/user.json'
import UserActivity from './../datas/user_activity.json'
import UserAverageSessions from './../datas/user_average-sessions.json'
import UserPerformances from './../datas/user_performance.json'

const Metrics = () => {
  return (
    <>
      <div className="infos_container">
        <div className="layout">
          <div className="activities_weight">
            <Weight activity={UserActivity.data.sessions} />
          </div>

          <div className="layout_2">
            <div className="average_sessions">
              <AverageSessions
                averageSessions={UserAverageSessions.data.sessions}
              />
            </div>
            <div className="performances">
              <Performances
                perfsKind={UserPerformances.data.kind}
                perfsData={UserPerformances.data.data}
              />
            </div>
            <div className="user_score">
              <ScorePieChart userScore={User.data} />
            </div>
          </div>
        </div>
        <div className="keydata_container">
          <KeyData keyData={User.data.keyData} />
        </div>
      </div>
    </>
  )
}

export default Metrics
