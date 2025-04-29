"use client";
import { useEffect } from "react";
import Image from "next/image";
import "reveal.js/dist/reveal.css";
import "./theme.scss";
import TitleSlide from "./slides/title-slide";
import Slide from "./slide";
import * as lucide from "lucide-react";
import DemoSlide from "./slides/demo-slide";

export default function Presentation() {
  useEffect(() => {
    import('reveal.js').then(({ default: Reveal }) => {
      const deck = new Reveal();
      deck.initialize({
        width: '100%',
        height: '100%',
        margin: 0,
        controls: false,
        progress: true,
        history: true,
        center: true,
        transition: 'zoom',
        autoAnimateEasing: 'cubic-bezier(0.1, 1, 0.1, 1)',
        transitionSpeed: 'fast',
        backgroundTransition: 'slide',
        slideNumber: true,
        navigationMode: 'linear'
      });
    });
  });

  // ▪ Present your pitch (product story)
  // ▪ Provide a vision of the future of the project
  // ▪ Introduce updates since the last presentation
  // ▪ Demonstrate completeness
  // ▪ Show how your project is production-ready

  return (
    <div className="reveal">
      <div
        className="slides"
        style={{
          width: '100vw !important',
          height: '100vh !important',
        }}
      >
        <TitleSlide />

        {/* overview slide */}
        {/* ▪ Present your pitch (product story) */}
        {/* ▪ Provide a vision of the future of the project */}
        {/* ▪ Introduce updates since the last presentation */}
        {/* ▪ Demonstrate completeness */}
        {/* ▪ Show how your project is production-ready */}
        <Slide
          data-id="original-challenge"
          data-transition="zoom"
        >
          <Slide data-auto-animate>
            <div>
              <h1 data-id="challenge"
                style={{
                  color: 'white',
                  textShadow: 'none',

                }}
              >Original Challenge</h1>
            </div>
          </Slide>

          <Slide data-auto-animate>
            <div>
              <h1 data-id="challenge"
                style={{
                  color: 'white',
                  textShadow: 'none',
                  fontSize: '5rem',
                }}
              >Original Challenge</h1>
              <h2
                style={{
                  color: 'white',
                  textShadow: 'none',
                  fontSize: '8rem',
                }}
              >Investing is intimidating</h2>
            </div>
          </Slide>
          <Slide
            data-id="original-challenge"
            data-auto-animate
          >
            <div>
              <h1 data-id="challenge"
                style={{
                  color: 'lightgrey',
                  textShadow: 'none',
                  fontSize: '3rem',
                }}
              >Original Challenge</h1>
              <h2
                style={{
                  color: 'lightgrey',
                  textShadow: 'none',
                  fontSize: '3.5rem',
                }}
              >Investing is intimidating</h2>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '2rem',
                }}
              >
                <div style={{
                  position: 'relative',
                }}
                >
                  <lucide.X size={120} color="red"
                    style={{
                      position: 'absolute',

                    }}
                  />
                  <lucide.Map size={120} color="white" />
                </div>
                <h2
                  style={{
                    color: 'white',
                    textShadow: 'none',
                    fontSize: '6rem',
                  }}
                >
                  Existing apps = no guidance
                </h2>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '2rem',
                }}
              >
                <lucide.Frown size={120} color="white" />
                <h2
                  style={{
                    color: 'white',
                    textShadow: 'none',
                    fontSize: '6rem',
                  }}
                >Simulators = no assistance</h2>
              </div>
            </div>
          </Slide>
        </Slide>
        <Slide
          data-background-color="#f0f0f0"
          data-id="system-construction"
          data-transition="zoom"
          data-auto-animate-restart
          data-auto-animate
        >
          <h1
            style={{
              fontSize: '5rem',
            }}
          >System Construction</h1>
        </Slide>
        <Slide
          data-id="system-construction"
          data-transition="zoom"
          data-auto-animate
        >
          <h1
            style={{
              color: 'white',
              textShadow: 'none',
              fontSize: '5rem',
            }}>System Construction</h1>

          <Image src="/diagram.png" alt="Software Construction Diagram" width={800} height={600} />
        </Slide>
        <Slide
          data-id="software-solution"
          data-transition="zoom"
          data-auto-animate
          data-auto-animate-restart
        >
          <h1
            style={{
              color: 'white',
              fontSize: '5rem',
            }}>Software Solution</h1>
        </Slide>
        <Slide
          data-id="software-solution"
          data-transition="zoom"
          data-background-color="#f0f0f0"
          data-auto-animate
        >
          <h1
            style={{
              textShadow: 'none',
              fontSize: '3rem',
            }}>Software Solution</h1>
          <ul
            style={{
              color: 'black',
              textShadow: 'none',
              fontSize: '3rem',
              listStyleType: 'none',
              padding: 0,
              margin: 0,
            }}
          >
            <li>All skill ranges</li>
            <li>
              <hr
                style={{
                  border: '1px solid orange',
                  width: '80%',
                  margin: '1rem auto',
                }}
              />
            </li>
            <li>Useful, easy-access information</li>
            <li>
              <hr
                style={{
                  border: '1px solid orange',
                  width: '80%',
                  margin: '1rem auto',
                }}
              />
            </li>
            <li>Benefits of open source</li>
          </ul>
        </Slide>
        <Slide
          data-id="strengths-limits"
          data-transition="zoom"
          data-auto-animate
          data-auto-animate-restart
        >
          <h1
            style={{
              color: 'white',
              fontSize: '5rem',
            }}
          >
            Strengths & Limits
          </h1>
        </Slide>
        <Slide
          data-id="strengths-limits"
          data-transition="zoom"
          data-auto-animate
        >
          <div>
            <h1
              style={{
                color: 'lightgrey',
                textShadow: 'none',
                fontSize: '3rem',
              }}
            >
              Strengths & Limits
            </h1>
            <table
              style={{
                width: '80%',
                margin: '2rem auto',
                borderCollapse: 'collapse',
                color: 'white',
                fontSize: '1.7rem',
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      border: '1px solid white',
                      padding: '1rem',
                      backgroundColor: '#333',
                    }}
                  >
                    Strengths
                  </th>
                  <th
                    style={{
                      border: '1px solid white',
                      padding: '1rem',
                      backgroundColor: '#333',
                    }}
                  >
                    Limits
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    style={{
                      border: '1px solid white',
                      padding: '1rem',
                      textAlign: 'center',
                    }}
                  >
                    Chat, news analysis, and other LLM features offer comprehensive guidance for making investment decision.
                  </td>
                  <td
                    style={{
                      border: '1px solid white',
                      padding: '1rem',
                      textAlign: 'center',
                    }}
                  >
                    Only one predefined investing algorithm and one user-defined algorithm.
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      border: '1px solid white',
                      padding: '1rem',
                      textAlign: 'center',
                    }}
                  >
                    Ability to buy and sell stocks across multiple portfolios allows users to invest to their hearts content and play around with as many strategies as they desire.
                  </td>
                  <td
                    style={{
                      border: '1px solid white',
                      padding: '1rem',
                      textAlign: 'center',
                    }}
                  >
                    Limited to 200 free requests to llm per day, could be scaled/sped up with more money

                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      border: '1px solid white',
                      padding: '1rem',
                      textAlign: 'center',
                    }}
                  >
                    UI is easy to use and makes it simple to get started quickly.

                  </td>
                  <td
                    style={{
                      border: '1px solid white',
                      padding: '1rem',
                      textAlign: 'center',
                    }}
                  >
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      border: '1px solid white',
                      padding: '1rem',
                      textAlign: 'center',
                    }}
                  >
                    Users are able to see how the predefined strategy performs on historical data to see if they want to start it on a particular stock.
                  </td>
                  <td
                    style={{
                      border: '1px solid white',
                      padding: '1rem',
                      textAlign: 'center',
                    }}
                  >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Slide>
        <Slide
          data-id="extensibility"
          data-auto-animate
          data-auto-animate-restart
          data-background-color="#f0f0f0"
        >
          <h1
            style={{
            }}
          >
            Extensibility
          </h1>
        </Slide>
        <Slide
          data-id="extensibility"
          data-auto-animate
        >
          <h1
            style={{
              textShadow: 'none',
              color: 'lightgrey',
              fontSize: "3rem"
            }}
          >
            Extensibility
          </h1>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2rem',
              }}
            >
              <lucide.ChartArea size={90} width={200} color="white" />
              <p
                style={{
                  color: 'white',
                  textShadow: 'none',
                  fontSize: '1.5rem',
                  maxWidth: '600px',
                  textAlign: 'left'
                }}
              >
                Users can add their own strategies and test them using existing framework in the repository.
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2rem',
              }}
            >
              <Image src={"/docker.png"} alt="Docker Logo" width={200} height={100} />
              <p
                style={{
                  color: 'white',
                  textShadow: 'none',
                  fontSize: '1.5rem',
                  maxWidth: '600px',
                  textAlign: 'left'
                }}
              >
                Containerization of the components allows each to be completely independent, simplifying future development and deployment.

              </p>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2rem',
              }}
            >
              <lucide.Bot size={90} width={200} color="white" />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'start',
                  justifyContent: 'center',
                }}
              >
                <p
                  style={{
                    color: 'white',
                    textShadow: 'none',
                    fontSize: '1.5rem',
                    maxWidth: '600px',
                    textAlign: 'left'
                  }}
                >
                  Preferences can be set to use the state of the art open source LLM models (LLAMA 70B, DeepSeek R1/V3)
                </p>
                <div
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    padding: '1rem',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '5rem',
                  }}
                >
                  <Image src={"/llama.png"} alt="Llama Logo" width={200} height={100} />
                  <Image src={"/deepseek.png"} alt="DeepSeek Logo" width={200} height={100} />
                </div>
              </div>
            </div>
          </div>
        </Slide>
        <Slide
          data-id="requirements"
        >
          <Slide
            data-id="requirements"
            data-auto-animate
            data-auto-animate-restart
          >
            <h1
              style={{
                color: 'white',
                fontSize: '6rem',
              }}
            >Requirements</h1>
          </Slide>
          <Slide
            data-id="requirements"
            data-auto-animate
            data-background-color="#f0f0f0"
          >
            <h1
              style={{
                textShadow: 'none',
                fontSize: '3rem',
              }}
            >
              Requirements
            </h1>
            <p>
              3. The user should be able to interact with a specialized LLM that gives the user information about the stock and comes to a conclusion about whether the user should buy, sell, or hold said stock.
            </p>
            <Image src={"/news-analysis.png"} alt="News Analysis" width={800} height={600} style={{
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }} />
          </Slide>
          <Slide
            data-id="requirements"
            data-auto-animate
            data-background-color="#f0f0f0"
          >
            <h1
              style={{
                textShadow: 'none',
                fontSize: '3rem',
              }}
            >
              Requirements
            </h1>
            <p>
              2. The user interface should be able to display and select any stock with a ticker and have that stock show up in their portfolio. The application should then be able to look up the current value of the stocks owned by the user and compare it to the original account balance to show gains/losses.
            </p>
            <Image src={"/ticker.png"} alt="Rec Pic 2" width={800} height={300} style={{
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }} />
          </Slide>
          <Slide
            data-id="requirements"
            data-auto-animate
            data-background-color="#f0f0f0"
          >
            <h1
              style={{
                textShadow: 'none',
                fontSize: '3rem',
              }}
            >
              Requirements
            </h1>
            <p>
              4. The application should support investment strategies that are automatically executed without user intervention. The user should be able to switch between manual trading and automatic trading whenever they desire.

            </p>
            <Image src={"/stats.png"} alt="Rec Pic 1" width={1300} height={190} style={{
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }} />
          </Slide>
          <Slide
            data-id="requirements"
            data-auto-animate
            data-background-color="#f0f0f0"
          >
            <h1
              style={{
                textShadow: 'none',
                fontSize: '3rem',
              }}
            >
              Requirements
            </h1>
            <p>
              1. The application interface should look similar to established trading platforms to familiarize the user with a typical trading environment. The user interface shall also meet at least a 90 on the accessibility score when measured against accessibility checkers like Chrome Lighthouse to ensure usability and readability for everyone.
            </p>
            <Image src={"/req-2-pic.png"} alt="Rec Pic 1" width={800} height={600} style={{
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }} />
          </Slide>
          <Slide
            data-id="requirements"
            data-auto-animate
            data-transition="slide-in"
            data-background-color="#f0f0f0"
          >
            <h1
              style={{
                textShadow: 'none',
                fontSize: '3rem',
              }}
            >
              Requirements
            </h1>
            <p>
              5. The application should keep track of multiple portfolios per user to enable the user to try out different strategies and switch seamlessly between them.
            </p>
            <Image src={"/portfolio.png"} alt="Portfolio" width={800} height={200} style={{
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }} />
          </Slide>
        </Slide>
        <Slide
          data-id="updates"
          data-transition="slide-in"
        >
          <h1
            style={{
              color: 'white',
              fontSize: '5rem',
            }}
          >Updates since Midterm</h1>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridTemplateRows: 'repeat(2, 1fr)',
              gap: '2rem',
              padding: '2rem',
              color: 'white'
            }}
          >
            <div>
              <lucide.GitPullRequest size={90} color="white" />
              <p>Integration</p>
            </div>
            <div>
              <lucide.Bot size={90} color="white" />
              <p>Single-Sentence Summary</p>
            </div>
            <div>
              <lucide.ChartBar size={90} color="white" />
              <p>Automatic strategy execution</p>
            </div>
            <div>
              <lucide.ChartColumnIncreasingIcon size={90} color="white" />
              <p>Displaying performance across multiple portfolios</p>
            </div>
            <div
            >
              <lucide.Palette size={90} color="white" />
              <p>Selection between different models for LLM endpoints</p>
            </div>
          </div>
        </Slide>
        <Slide
          data-background-color="#f0f0f0"
          data-id="design-improvements"
        >
          <h1>Design Improvements</h1>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2rem',
              padding: '2rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10rem',
                textAlign: 'left',
              }}
            >
              <lucide.Hammer size={90} color="black" />
              <p
                style={{
                  color: 'black',
                  fontSize: '1.5rem',
                  maxWidth: '600px',
                }}
              >
                For algo trader, clean and simple strategy definition that uses backtesting library for easy additional strategy definitions. Backtester runner that displays bargraph of performance over time of strategies for strategy development. Cleaner API definition to make integration easier.
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10rem',
                textAlign: 'left',
              }}
            >
              <lucide.Bot size={90} color="black" />
              <p
                style={{
                  color: 'black',
                  fontSize: '1.5rem',
                  maxWidth: '600px',
                }}
              >
                For LLM backend, added threading to handle more requests and the DeepSeek series of models
              </p>
            </div>
          </div>
        </Slide>
        <Slide
          data-id="future-work"
        >
          <h1
            style={{
              color: 'white',
              fontSize: '8rem',
            }}
          >Future Work</h1>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2rem',
              padding: '2rem',
              color: 'white'
            }}
          >
            <lucide.Combine size={90} color="white" />
            <p
              style={{
                maxWidth: '700px',
                textAlign: 'left',
              }}
            >Integrate full perspective analysis</p>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2rem',
              padding: '2rem',
              color: 'white',
            }}
          >
            <lucide.ChartPieIcon size={90} color="white" />
            <p
              style={{
                maxWidth: '700px',
                textAlign: 'left',
              }}
            >Add visualization of algorithmic trading strategy run on historical data</p>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2rem',
              padding: '2rem',
              color: 'white'
            }}
          >
            <lucide.Palette size={90} color="white" />
            <p
              style={{
                maxWidth: '700px',
                textAlign: 'left',
              }}
            >Design a more flexible strategy that users can tweak parameters on and run automatically</p>
          </div>
        </Slide>
        <DemoSlide />
      </div>
    </div >
  );
}
