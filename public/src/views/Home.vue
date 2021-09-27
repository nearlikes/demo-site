<template>
  <div class="container">
    <main class="bg">
      <section class="hero">
        <nav>
          <div class="logo">
            <img src="../assets/nlogo.png" alt="logo" />
          </div>
          <div class="links">
            <router-link to="/login"> Login </router-link>
            <router-link to="/register"> Register </router-link>
          </div>
        </nav>
        <div class="content">
          <div class="l">
            <h1>
              Boost your <br />
              Brand
            </h1>
            <p>
              Nearlikes - Transforming the way you advertise Discover the
              revolutionary power of turning customers into your own brand
              marketeers.
            </p>
            <router-link class="cta" to="/register">
              GROW YOUR BRAND
            </router-link>
          </div>
          <div class="r">
            <!-- <img class="phone" src="../assets/phone.png" alt="" /> -->
            <video
              ref="video"
              @click="unmute"
              class="phone"
              autoplay
              loop
              muted
              src="../assets/video.mp4"
            ></video>
            <img src="../assets/comp.png" alt="computer screen" />
          </div>
        </div>
      </section>
    </main>
    <main class="bg2">
      <section class="cards">
        <h1>HOW IT WORKS?</h1>
        <div class="card">
          <img src="../assets/registration.png" alt="" />
          <div class="text">
            <h2>Registration</h2>
            <p>
              Register using your mobile number, add in information about your
              company and voila! Your brand’s dashboard is ready in no time.
            </p>
            <router-link class="cta" to="/register"> Regsiter now </router-link>
          </div>
        </div>
        <div class="card rtl">
          <img src="../assets/campaign.png" alt="" />
          <div class="text">
            <h2>Launching Your Campaign</h2>
            <p>
              Your dashboard is your war-zone from where you can launch your
              targeted advertising campaigns. Based on your campaign’s targeted
              outreach, pick your customer pool according to the number of
              followers they have.
            </p>
            <router-link class="cta" to="/register"> Launch Your Campaign </router-link>
          </div>
        </div>
        <div class="card">
          <img src="../assets/upload.png" alt="" />
          <div class="text">
            <h2>Upload Media</h2>
            <p>
              Upload creative videos, reels, stories, pictures to your dashboard
              and use them to launch your campaigns.
            </p>
            <router-link class="cta" to="/register"> Start sharing </router-link>
          </div>
        </div>
        <div class="card rtl">
          <img src="../assets/onboard.png" alt="" />
          <div class="text">
            <h2>On-Boarding Customers</h2>
            <p>
              Our AI will on-board customers in 3 ways: It will take-on your
              existing customers It will add customers who had previously shared
              your brand’s stories or posts on their social media profile For
              those brands who are just starting out, it will pick up the
              targeted customers who take interest in your business vertical.
            </p>
            <router-link class="cta" to="/register"> Onboard Today </router-link>
          </div>
        </div>
        <div class="card">
          <img src="../assets/analytics.png" alt="" />
          <div class="text">
            <h2>Track Real-Time Analytics</h2>
            <p>
              Track the success of your campaign using our real-time analytics.
              Get access to growth by analysing KPIs that include likes, shares,
              clicks, reach, and impressions.
            </p>
            <router-link class="cta" to="/register"> See Insights </router-link>
          </div>
        </div>
      </section>
    </main>
    <section class="carousel">
      <h1>CASE STUDY</h1>
      <div class="content">
        <splide :options="options">
          <splide-slide>
            <div class="card">
              <img src="https://unsplash.it/512/512" alt="" />
              <h2>Nearlikes</h2>
              <div class="text">
                <div class="col">
                  <h3>Before</h3>
                  <h4 data-tag="Post">20</h4>
                  <h4 data-tag="Reach">30</h4>
                  <h4 data-tag="Views">40</h4>
                </div>
                <div class="col">
                  <h3>After</h3>
                  <h4>200</h4>
                  <h4>300</h4>
                  <h4>400</h4>
                </div>
              </div>
            </div>
          </splide-slide>
          <splide-slide>
            <div class="card">
              <img src="https://unsplash.it/512/512" alt="" />
              <h2>Nearlikes</h2>
              <div class="text">
                <div class="col">
                  <h3>Before</h3>
                  <h4 data-tag="Post">20</h4>
                  <h4 data-tag="Reach">30</h4>
                  <h4 data-tag="Views">40</h4>
                </div>
                <div class="col">
                  <h3>After</h3>
                  <h4>200</h4>
                  <h4>300</h4>
                  <h4>400</h4>
                </div>
              </div>
            </div>
          </splide-slide>
          <splide-slide>
            <div class="card">
              <img src="https://unsplash.it/512/512" alt="" />
              <h2>Nearlikes</h2>
              <div class="text">
                <div class="col">
                  <h3>Before</h3>
                  <h4 data-tag="Post">20</h4>
                  <h4 data-tag="Reach">30</h4>
                  <h4 data-tag="Views">40</h4>
                </div>
                <div class="col">
                  <h3>After</h3>
                  <h4>200</h4>
                  <h4>300</h4>
                  <h4>400</h4>
                </div>
              </div>
            </div>
          </splide-slide>
        </splide>
      </div>
      <!-- <div class="quotes">
        <splide :options="quotes">
          <splide-slide>
            <blockquote>
              <p>
                A brand is no longer what we tell the consumer it is — it is
                what consumers tell each other it is. – Scott Cook
              </p>
            </blockquote>
          </splide-slide>
          <splide-slide>
            <blockquote>
              <p>
                Advertising is no longer about what we tell the consumer it is -
                it is what consumers tell each other it is.
              </p>
            </blockquote>
          </splide-slide>
          <splide-slide>
            <blockquote>
              <p>
                Great advertising is not what you do, it is what your consumer
                does
              </p>
            </blockquote>
          </splide-slide>
          <splide-slide>
            <blockquote>
              <p>
                Great advertising is not about stories you tell, it is the
                stories your customer tells
              </p>
            </blockquote>
          </splide-slide>
        </splide>
      </div> -->
    </section>
    <div class="stats">
      <div class="stat">
        <ion-icon name="earth"></ion-icon>
        <div class="text">
          <h3>4K+</h3>
          <p>Media Shared</p>
        </div>
      </div>
      <div class="stat">
        <ion-icon name="person"></ion-icon>
        <div class="text">
          <h3>1K+</h3>
          <p>Trusted Clients</p>
        </div>
      </div>
      <div class="stat">
        <ion-icon name="bar-chart"></ion-icon>
        <div class="text">
          <h3>₹25.5K+</h3>
          <p>Cash Rewards</p>
        </div>
      </div>
    </div>
    <section class="faq">
      <h1>FAQ</h1>
      <div class="content">
        <details class="ques">
          <summary>1. How can I start my new campaign?</summary>
          <p>
            Starting a media campaign just got a lot easier. All you have to do
            is pick up a location where you want to launch your campaign and
            select the age group of your target audience. Give a brief about
            your campaign and choose the customer pool you want to send your
            message through. Upload your favourite photos, videos, reels or
            stories and then ouralgorithm will assign these media to the
            customers who will share them on their instagram account. Once this
            is done, Nearlikes will give you a diverse real-time analytics of
            your campaign’s performance.
          </p>
        </details>
        <details class="ques">
          <summary>2. What parameters will Nearlikes analyze for me?</summary>
          <p>
            Your Nearlikes dashboard will contain analytics for your customer
            count, number of reach, social shares, likes andclicks. You can keep
            a comprehensive track of these analytics and keep growing upwards on
            the outreach graph.
          </p>
        </details>
        <details class="ques">
          <summary>3. How many followers will my customers have?</summary>
          <p>
            You have the complete authority to choose the customers with the
            number of followers you desire. We organise customers into different
            pools based on the number of followers they have on instagram. We
            start from customers having 500 followers all the way till customers
            with 18000 followers. Pick your lot and expand your genuine brand
            outreach.
          </p>
        </details>
        <details class="ques">
          <summary>
            4. Can I create my own media library for my campaigns?
          </summary>
          <p>
            Absolutely. You can create a diverse media library of images,
            videos, reels and stories and upload it to your dashboard.
          </p>
        </details>
        <details class="ques">
          <summary>5. What is the billing process?</summary>
          <p>
            You will be billed monthly based on the customer pool you pick up
            for your campaigns. The best part is that you can keep a track
            record of all your previous payments in your dashboard. Our rates
            significantly reduce your advertising expenses while greatly
            expanding brand awareness.
          </p>
        </details>
      </div>
    </section>
    <footer>
      <div class="links">
        <div class="col">
          <h2>Quick Links</h2>
          <h4>How it works?</h4>
          <h4>Our clients</h4>
          <h4>FAQ</h4>
        </div>
        <div class="col">
          <h2>Help and Support</h2>
          <h4 @click="$router.push('/privacy_policy')">Privacy Policy</h4>
          <h4 @click="$router.push('/termsofservice')">Terms of Service</h4>
          <h4><a href="mailto:query@nearlikes.com">Help</a></h4>
        </div>
        <div class="col">
          <h2>Contact Us</h2>
          <h4><a href="mailto:contact@nearlikes.com">Contact</a></h4>
          <h4><a href="mailto:support@nearlikes.com">Support</a></h4>
          <h4><a href="mailto:query@nearlikes.com">Query</a></h4>
        </div>
      </div>
      <div class="end">
        <img src="../assets/flogo.png" alt="nearlikes" />
        <p>
          All &copy; Copyrights Reserved as of {{ new Date().getFullYear() }}
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "Home",
  mounted() {
    gsap.from(".card", {
      scrollTrigger: {
        trigger: ".cards",
        scrub: true,
        start: "top center",
      },
      duration: 1,
      opacity: 0,
      y: -100,
      x: -300,
      stagger: 0.3,
      ease: "power2.out",
    });
    gsap.from(".ques", {
      scrollTrigger: {
        trigger: ".ques",
        scrub: true,
        start: "top center",
      },
      duration: 2,
      opacity: 0,
      y: -150,
      stagger: 0.3,
      ease: "power2.out",
    });
  },
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      play: true,
      options: {
        type: "loop",
        perPage: 1,
        focus: "center",
        autoplay: true,
        padding: "100px",
        autoWidth: true,
        gap: "150px",
      },
      quotes: {
        type: "fade",
        rewind: true,
        perPage: 1,
        focus: "center",
        autoplay: true,
        arrows: false,
      },
    };
  },
  methods: {
    unmute() {
      this.play = !this.play;
      this.$refs.video.muted = this.play;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  width: 100vw;
  margin: 0 auto;
  position: relative;
  text-align: left;
}

section {
  max-width: 1400px;
  margin: 0 auto;
}

main.bg {
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    background-image: url("../assets/s1.svg");
    width: 50%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
  }
}

.hero {
  position: relative;
  height: 100vh;
  width: 100%;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
    a {
      color: #000;
      text-decoration: none;
      font-size: 1.5rem;
      position: relative;
      &::after {
        content: "";
        transition: all 200ms ease-in-out;
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0%;
        height: 3px;
        background: rgb(255, 12, 125);
      }
      &:hover::after {
        width: 100%;
      }
    }
  }
  .links {
    display: flex;
    gap: 50px;
    padding: 0 50px;
  }
  .logo {
    img {
      width: 60%;
    }
  }
  .content {
    height: 85%;
    display: flex;
    align-items: center;
    padding: 0 30px;
    .r {
      flex: 1;
      position: relative;
      img {
        width: 100%;
      }
      .phone {
        width: 35%;
        position: absolute;
        top: -10%;
        left: -20%;
        cursor: pointer;
        border-radius: 25px;
        // animation: float 2s ease-in-out infinite alternate;
      }
      @keyframes float {
        to {
          transform: translateY(0);
        }
        from {
          transform: translateY(10px);
        }
      }
    }
    .l {
      flex: 1;
      padding: 10px;
      h1 {
        font-size: 6.5rem;
      }
      p {
        max-width: 350px;
        padding: 20px 0;
        font-size: 1.2rem;
        margin: 20px 0;
      }
      .cta {
        padding: 10px 20px;
        // background: rgb(255, 12, 125);
        border: 2px solid rgb(255, 12, 125);
        color: white;
        font-size: 2rem;
        border-radius: 5px;
        text-decoration: none;
        color: #000;
        transition: all 200ms ease-in-out;
        &:hover {
          background: rgb(255, 12, 125);
          color: white;
        }
      }
    }
  }
}

main.bg2 {
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 70%;
    left: 0;
    transform: translateY(-50%);
    background-image: url("../assets/s2.svg");
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    z-index: -1;
  }
  .cards {
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;
    h1 {
      padding: 20px;
      font-size: 3rem;
    }
    .card {
      width: 90%;
      display: flex;
      gap: 30px;
      img {
        max-width: 50%;
        aspect-ratio: 16 / 9;
        border-radius: 30px;
      }
      h2 {
        font-size: 2.3rem;
      }
      p {
        font-size: 1.5rem;
        padding: 20px 0;
      }
      .cta {
        padding: 10px 20px;
        width: max-content;
        border: 2px solid rgb(255, 12, 125);
        color: white;
        font-size: 1.6rem;
        border-radius: 5px;
        text-decoration: none;
        color: #000;
        transition: all 200ms ease-in-out;
        &:hover {
          background: rgb(255, 12, 125);
          color: white;
        }
      }
      .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
    .rtl {
      flex-direction: row-reverse;
      text-align: right;
      .cta {
        margin-left: auto;
      }
    }
  }
}

.carousel {
  padding: 50px 0;
  h1 {
    font-size: 3rem;
    text-align: center;
    min-height: 5vh;
  }
  .content {
    padding: 30px;
    min-height: 400px;
  }
  .card {
    background: #ffffff;
    box-shadow: 6px 8px 13px 1px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    border: 1px solid #eaeaea;
    width: 250px;
    height: 350px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0;
    img {
      height: 100px;
      width: 100px;
      border-radius: 50%;
    }
    h2 {
      padding: 10px;
      font-size: 1.8rem;
    }
    h3 {
      padding: 15px;
      font-size: 1.5rem;
      font-weight: 500;
    }
    h4 {
      padding: 5px;
      font-size: 1.4rem;
      font-weight: normal;
      position: relative;
    }
    [data-tag] {
      &::after {
        content: attr(data-tag);
        position: absolute;
        left: -80%;
        background: rgb(255, 135, 99);
        padding: 0.2rem 0.5rem;
        width: 50px;
        border-radius: 5px;
        color: white;
      }
    }
    .text {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 90%;
      text-align: center;
    }
  }

  .quotes {
    p {
      font-size: 2.2rem;
      padding: 20px 0;
      text-align: center;
      &::before {
        content: "“";
        font-size: 3rem;
      }
      &::after {
        content: "”";
        font-size: 3rem;
      }
    }
  }
}
.stats {
  min-height: 200px;
  width: 100%;
  background: linear-gradient(92.97deg, #ff4b2b 9.09%, #ff416c 89.66%);
  display: flex;
  justify-content: space-around;
  align-items: center;
  .stat {
    display: flex;
    align-items: center;
    gap: 20px;
    text-align: left;
    color: #fff;
    h3 {
      font-size: 3rem;
    }
    p {
      font-size: 1.5rem;
    }
    ion-icon {
      font-size: 5rem;
    }
  }
}
.faq {
  min-height: 100vh;
  h1 {
    font-size: 4rem;
    text-align: center;
    padding: 3rem 0;
  }
  .content {
    padding: 50px 20px;
    details {
      margin: 30px 0;
      font-size: 2.1rem;
      // background: rgb(160, 255, 189);
      background: rgb(241, 241, 241);
      border-radius: 10px;
      padding: 20px;
      p {
        font-size: 1.5rem;
        padding: 20px;
      }
    }
  }
}

footer {
  background: linear-gradient(90deg, #ff4c2c 0%, #ff426d 100%);
  padding: 50px;
  .links {
    display: flex;
    text-align: center;
    color: #fff;
    gap: 50px;
    padding: 0 50px;
    align-content: center;
    justify-content: space-evenly;
    h2 {
      padding: 20px;
      font-size: 1.8rem;
    }
    h4 {
      padding: 10px;
      font-size: 1.3rem;
      font-weight: normal;
      cursor: pointer;
    }
  }
  .end {
    padding: 30px 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    font-size: 1.6rem;
  }
  .col {
    a {
      color: #fff;
      text-decoration: none;
    }
  }
}

@media only screen and (max-width: 976px) {
  .hero {
    nav {
      a {
        display: none;
      }
    }
    .logo {
      img {
        width: 80%;
      }
    }
    .content {
      height: 85%;
      display: flex;
      align-items: center;
      .r {
        display: none;
      }
      .l {
        h1 {
          font-size: 5rem;
        }
        .cta {
          font-size: 1.8rem;
        }
      }
    }
  }

  main.bg2 {
    .cards {
      .card {
        flex-direction: column;
        img {
          max-width: 90%;
          aspect-ratio: 16 / 9;
        }
      }
      .rtl {
        flex-direction: column;
        text-align: left;
      }
    }
  }

.carousel {
  .card {
    transform: scale(0.7);
  }
}

  .stats {
    flex-direction: column;
    gap: 50px;
    padding: 50px 0;
  }
  .faq {
    h1 {
      font-size: 2rem;
    }
  }

  footer {
    .links {
      flex-direction: column;
    }
  }
}
</style>