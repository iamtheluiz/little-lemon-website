import highlightImageA from '../assets/Mario and Adrian A.jpg';
import highlightImageB from '../assets/Mario and Adrian b.jpg';

function StorySection() {
  return (
    <section id="story">
      <div className="container">
        <header>
          <h2>Our story</h2>
        </header>
        <div className="information">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos porro nesciunt delectus voluptate voluptatum ab. A perspiciatis exercitationem quia assumenda ipsam earum quo, neque fuga et optio labore deleniti dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sed fugit quod reiciendis, eaque praesentium neque, voluptatem assumenda animi totam nihil cumque consequuntur rerum blanditiis delectus porro consectetur adipisci natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, cum distinctio. Architecto corrupti labore ab unde eos at qui vel earum. Similique enim asperiores eius id, in aliquid assumenda alias.</p>
        </div>
        <div className="images">
          <img src={highlightImageA} alt="Mario and Adrian" />
          <img src={highlightImageB} alt="Mario and Adrian" />
        </div>
      </div>
    </section>
  );
}

export default StorySection;