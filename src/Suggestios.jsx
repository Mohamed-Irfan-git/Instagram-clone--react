import { useState, useEffect } from 'react'

function Suggestios() {
  const [profile, setProfile] = useState(null)
  const [suggestions, setSuggestions] = useState([])


  useEffect(() => {
    fetch('http://localhost:3000/profile')
      .then((data) => data.json())
      .then(data => setProfile(data)).
      catch(err => console.log(err))


    fetch('http://localhost:3000/suggestions')
      .then((data) => data.json())
      .then(data => setSuggestions(data)).
      catch(err => console.log(err))
  }, [])
  console.log(suggestions)



  return (
    <div>
      <div className='suggestion m-4'>

        {profile ? (
          <div className='d-flex'>
            <img className="dp rounded-circle" src={profile.profileImage} alt="No profile" />
            <h5>{profile.username}</h5>
            <small className='ms-auto text-primary'>Switch</small>
          </div>)
          : <p>Loading....</p>}
        <div className='d-flex'>
          <p>Suggest for you</p>


          <p className='ms-auto'><b>See all</b></p>

        </div>


        {suggestions.length > 0 ? (
          <div >
            {suggestions.map((suggestion) => (
              <div key={suggestion.userId}>
                <div className='d-flex gap-3'>
                  <img className="dp rounded-circle" src={suggestion.profileImage} alt="No profile" />
                  <h5>{suggestion.username}</h5>
                  <p className='btn btn-primary ms-auto'>Follow</p>
                </div>

              </div>

            ))}


          </div>
        ) : (
          <div>
            Loading....
          </div>
        )
        }

      </div>

    </div>


  )
}

export default Suggestios
