export default function Hero() {
  return (
    <section className="hero-section" id="program">

      <div className="hero-left-panel">
        <p className="hero-trust">Customers Loved &amp; Trust FlexFit</p>
        <h1 className="hero-headline">
          <span>Stronger.</span>
          <span>Better.</span>
          <span className="text-gradient">You.</span>
        </h1>
        <div className="hero-desc-box">
          <p className="hero-description">
            Transform your body and mind with FlexFit. Get personalised
            workouts, expert coaching and real results — anytime, anywhere.
          </p>
          <a href="#workouts" className="hero-cta">
            <span>Start Your Journey</span>
            <i className="fa-solid fa-arrow-right" />
          </a>
        </div>
      </div>

      <div className="program-info" id="rules">
        <div className="program-block">
          <p className="section-label">The Program</p>
          <h5>Complete this training program if you want to...</h5>
          <ol className="benefits-list">
            <li>Follow a simple program with guaranteed results</li>
            <li>Get fit, healthy, strong and shredded</li>
            <li>Learn more about gym, training and technique</li>
            <li>Become a lifetime gym bro 💛</li>
          </ol>
        </div>

        <div className="program-block">
          <p className="section-label">The Rules</p>
          <h3>3 Non-Negotiables</h3>
          <p>To complete this program, you <b>MUST</b> follow these 3 simple rules:</p>
          <ul className="rules-list">
            <div className="rule-item">
              <p><b>Rest</b></p>
              <p>Ensure that you are taking rest days where necessary</p>
            </div>
            <div className="rule-item">
              <p><b>Reps</b></p>
              <p>Every rep is a pause rep following a{" "}
                <abbr title="2 second down - 2 second pause - 2 second up">2-2-2 tempo</abbr>
              </p>
            </div>
            <div className="rule-item">
              <p><b>Weight*</b></p>
              <p>Select the maximum weight that allows you to complete the set with good form</p>
            </div>
          </ul>
          <small>* The first and second set should be at 75% and 85% of your working weight used for the last two sets.</small>
        </div>

        <div className="program-block program-block--full" id="workouts">
          <p className="section-label">The Structure</p>
          <h3>The Training Plan</h3>
          <p>This training plan uses a structure known as the <b>Bro Split</b>, and follows this rotation ⬇️</p>
          <div className="split-badge">
            <i className="fa-solid fa-dumbbell" /> Push &nbsp;→&nbsp;
            <i className="fa-solid fa-weight-hanging" /> Pull &nbsp;→&nbsp;
            <i className="fa-solid fa-bolt" /> Legs &nbsp;→&nbsp; Repeat
          </div>
          <p>Complete all of the workouts below and track your progress along the way ✅</p>
        </div>
      </div>

    </section>
  );
}