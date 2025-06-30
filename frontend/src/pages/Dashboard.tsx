import { useAuth } from '../contexts/AuthContext'
import FishingChatBot from '../components/FishingChatBot'

const Dashboard = () => {
  const { user } = useAuth()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Welcome to your Dashboard, {user?.full_name}!
      </h1>
      
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Stats Cards */}
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-lg font-semibold mb-2">Recent Catches</h3>
              <p className="text-gray-600">No catches recorded yet.</p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold mb-2">Fishing Sessions</h3>
              <p className="text-gray-600">Start tracking your sessions.</p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold mb-2">Analytics</h3>
              <p className="text-gray-600">View your fishing insights.</p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold mb-2">Equipment</h3>
              <p className="text-gray-600">Manage your fishing gear.</p>
            </div>
          </div>
        </div>

        {/* Fishing ChatBot */}
        <div>
          <FishingChatBot />
        </div>
      </div>
    </div>
  )
}

export default Dashboard 