import React from "react";
import styles from "./Loading.module.css";

const Loading = () => {
  const [step, setStep] = React.useState(0);

  React.useEffect(() => {
    function updateStep() {
      setStep((step) => {
        if (step < 3) return step + 1;
        else return 0;
      });
    }
    const interval = setInterval(updateStep, 300);
    return () => {
      clearInterval(interval);
    };
  }, []);

  function displayStep(i) {
    return {
      display: step === i ? "block" : "none",
    };
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.loading}>
        <svg
          width="46"
          height="31"
          viewBox="0 0 46 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g style={displayStep(0)}>
            <path
              d="M17.44 5.78992L18.8514 3.34542L13.0569 0L11.6456 2.44451L9.03134 0.935164L4.51567 8.75653L0 16.5779L19.0526 27.5779L28.0839 11.9352L17.44 5.78992ZM13.2664 0.944102L17.929 3.63605L16.8741 5.46319L12.2115 2.77124L13.2664 0.944102ZM24.6465 16.582L20.5396 14.2108L20.1831 14.8282L24.2901 17.1993L18.8431 26.6338L0.922358 16.2873L6.36935 6.8528L8.99447 8.36841C8.29192 8.85463 7.67519 9.50982 7.21151 10.3129C5.65779 13.0041 6.40066 16.3522 8.86756 17.7765C11.3345 19.2008 14.6055 18.17 16.1592 15.4789C16.6229 14.6758 16.8819 13.8141 16.9517 12.9625L19.4285 14.3925L19.7849 13.7751L16.9605 12.1445C16.8578 10.4448 15.9965 8.87755 14.5032 8.01536C13.0098 7.15317 11.2219 7.19091 9.69855 7.95175L6.72579 6.23543L9.24082 1.87927L27.1616 12.2258L24.6465 16.582ZM7.77743 10.6397C9.13462 8.28895 11.9919 7.38863 14.1467 8.63273C16.3016 9.87682 16.9505 12.8014 15.5933 15.1522C14.2361 17.5029 11.3788 18.4032 9.224 17.1591C7.06916 15.915 6.42023 12.9904 7.77743 10.6397Z"
              fill="black"
            />
            <path
              d="M20.5772 9.83039L19.2799 12.0775L23.5805 14.5604L24.8778 12.3133L20.5772 9.83039ZM23.371 13.6163L20.2022 11.7868L20.7867 10.7745L23.9555 12.604L23.371 13.6163Z"
              fill="black"
            />
            <path
              d="M13.8217 9.19573C11.9514 8.11593 9.47146 8.89732 8.29349 10.9376C7.11552 12.9779 7.67879 15.5163 9.54907 16.5961C11.4193 17.6759 13.8993 16.8945 15.0772 14.8542C16.2552 12.8139 15.6919 10.2755 13.8217 9.19573ZM9.9055 15.9787C8.34725 15.0791 7.87801 12.9642 8.85941 11.2644C9.84084 9.56448 11.907 8.91347 13.4652 9.8131C15.0235 10.7127 15.4927 12.8276 14.5113 14.5275C13.5298 16.2274 11.4637 16.8784 9.9055 15.9787Z"
              fill="black"
            />
            <path
              d="M9.42529 11.5911L9.99121 11.9178C10.5796 10.8987 11.8182 10.5085 12.7523 11.0478L13.1088 10.4304C11.8626 9.71096 10.2102 10.2316 9.42529 11.5911Z"
              fill="black"
            />
          </g>
          <g style={displayStep(2)}>
            <path
              d="M8.40869 6.14524L6.99735 3.70073L1.20292 7.04615L2.61426 9.49066L0 11L9.03134 26.6427L28.0839 15.6427L19.0526 0L8.40869 6.14524ZM2.12528 7.33679L6.78787 4.64484L7.84277 6.47197L3.18018 9.16392L2.12528 7.33679ZM21.3581 5.30026L17.2512 7.67141L17.6076 8.28878L21.7145 5.91763L27.1615 15.3521L9.24082 25.6986L3.79383 16.2642L6.41895 14.7485C6.48875 15.6001 6.74779 16.4618 7.21148 17.2649C8.7652 19.956 12.0362 20.9868 14.5031 19.5625C16.97 18.1382 17.7129 14.7901 16.1592 12.099C15.6955 11.2958 15.0788 10.6407 14.3762 10.1544L16.853 8.72446L16.4965 8.10709L13.6721 9.73775C12.1488 8.97692 10.3609 8.93917 8.86754 9.80136C7.37418 10.6636 6.51293 12.2308 6.41015 13.9305L3.43739 15.6468L0.922358 11.2906L18.8431 0.944081L21.3581 5.30026ZM7.7774 16.9382C6.42021 14.5874 7.06914 11.6628 9.22398 10.4187C11.3788 9.17464 14.2361 10.075 15.5933 12.4257C16.9505 14.7764 16.3015 17.701 14.1467 18.9451C11.9919 20.1892 9.1346 19.2889 7.7774 16.9382Z"
              fill="black"
            />
            <path
              d="M13.4764 5.44857L14.7738 7.69566L19.0744 5.21271L17.777 2.96562L13.4764 5.44857ZM18.152 4.92208L14.9833 6.75156L14.3988 5.7392L17.5675 3.90972L18.152 4.92208Z"
              fill="black"
            />
            <path
              d="M9.54903 10.9817C7.67876 12.0615 7.11549 14.5999 8.29346 16.6402C9.47143 18.6805 11.9514 19.4619 13.8216 18.3821C15.6919 17.3023 16.2551 14.7639 15.0772 12.7236C13.8992 10.6833 11.4193 9.90195 9.54903 10.9817ZM13.4652 17.7647C11.907 18.6644 9.84078 18.0133 8.85938 16.3135C7.87796 14.6136 8.34725 12.4987 9.90547 11.5991C11.4637 10.6995 13.5299 11.3505 14.5113 13.0504C15.4927 14.7503 15.0234 16.8651 13.4652 17.7647Z"
              fill="black"
            />
            <path
              d="M9.42526 15.9868L9.99118 15.66C9.40283 14.641 9.68417 13.3732 10.6183 12.8339L10.2619 12.2165C9.01567 12.936 8.64036 14.6273 9.42526 15.9868Z"
              fill="black"
            />
          </g>
          <g style={displayStep(3)}>
            <path
              d="M9.70952 2.82267V0H3.01868V2.82267H0V20.8853H22V2.82267H9.70952ZM3.67215 0.712875H9.05605V2.82267H3.67215V0.712875ZM21.3465 8.56561H16.6042V9.27849H21.3465V20.1725H0.653469V9.27849H3.6847C3.31938 10.0508 3.11287 10.9266 3.11287 11.854C3.11287 14.9614 5.43031 17.4896 8.27883 17.4896C11.1274 17.4896 13.4448 14.9614 13.4448 11.854C13.4448 10.9266 13.2382 10.0509 12.873 9.27849H15.7329V8.56561H12.4716C11.5327 7.14502 10.0032 6.21839 8.27883 6.21839C6.55445 6.21839 5.02498 7.14502 4.08611 8.56561H0.653469V3.53555H21.3466L21.3465 8.56561ZM3.76634 11.854C3.76634 9.13959 5.79064 6.93127 8.27883 6.93127C10.767 6.93127 12.7913 9.13959 12.7913 11.854C12.7913 14.5684 10.767 16.7767 8.27883 16.7767C5.79064 16.7767 3.76634 14.5684 3.76634 11.854Z"
              fill="black"
            />
            <path
              d="M14.4467 4.75321V7.34793H19.4125V4.75321H14.4467ZM18.7591 6.63506H15.1001V5.46609H18.7591V6.63506Z"
              fill="black"
            />
            <path
              d="M8.27884 7.58137C6.11923 7.58137 4.36224 9.49804 4.36224 11.854C4.36224 14.2099 6.11923 16.1266 8.27884 16.1266C10.4384 16.1266 12.1954 14.2099 12.1954 11.854C12.1954 9.49804 10.4384 7.58137 8.27884 7.58137ZM8.27884 15.4137C6.47952 15.4137 5.01571 13.8168 5.01571 11.854C5.01571 9.89113 6.47957 8.29424 8.27884 8.29424C10.0781 8.29424 11.5419 9.89118 11.5419 11.854C11.5419 13.8169 10.0781 15.4137 8.27884 15.4137Z"
              fill="black"
            />
            <path
              d="M5.66913 11.854H6.32259C6.32259 10.6773 7.20014 9.71999 8.27879 9.71999V9.00712C6.83981 9.00712 5.66913 10.2842 5.66913 11.854Z"
              fill="black"
            />
            <path
              d="M9.70952 2.82267V0H3.01868V2.82267H0V20.8853H22V2.82267H9.70952ZM3.67215 0.712875H9.05605V2.82267H3.67215V0.712875ZM21.3465 8.56561H16.6042V9.27849H21.3465V20.1725H0.653469V9.27849H3.6847C3.31938 10.0508 3.11287 10.9266 3.11287 11.854C3.11287 14.9614 5.43031 17.4896 8.27883 17.4896C11.1274 17.4896 13.4448 14.9614 13.4448 11.854C13.4448 10.9266 13.2382 10.0509 12.873 9.27849H15.7329V8.56561H12.4716C11.5327 7.14502 10.0032 6.21839 8.27883 6.21839C6.55445 6.21839 5.02498 7.14502 4.08611 8.56561H0.653469V3.53555H21.3466L21.3465 8.56561ZM3.76634 11.854C3.76634 9.13959 5.79064 6.93127 8.27883 6.93127C10.767 6.93127 12.7913 9.13959 12.7913 11.854C12.7913 14.5684 10.767 16.7767 8.27883 16.7767C5.79064 16.7767 3.76634 14.5684 3.76634 11.854Z"
              fill="black"
            />
            <path
              d="M14.4467 4.75321V7.34793H19.4125V4.75321H14.4467ZM18.7591 6.63506H15.1001V5.46609H18.7591V6.63506Z"
              fill="black"
            />
            <path
              d="M8.27884 7.58137C6.11923 7.58137 4.36224 9.49804 4.36224 11.854C4.36224 14.2099 6.11923 16.1266 8.27884 16.1266C10.4384 16.1266 12.1954 14.2099 12.1954 11.854C12.1954 9.49804 10.4384 7.58137 8.27884 7.58137ZM8.27884 15.4137C6.47952 15.4137 5.01571 13.8168 5.01571 11.854C5.01571 9.89113 6.47957 8.29424 8.27884 8.29424C10.0781 8.29424 11.5419 9.89118 11.5419 11.854C11.5419 13.8169 10.0781 15.4137 8.27884 15.4137Z"
              fill="black"
            />
            <path
              d="M5.66913 11.854H6.32259C6.32259 10.6773 7.20014 9.71999 8.27879 9.71999V9.00712C6.83981 9.00712 5.66913 10.2842 5.66913 11.854Z"
              fill="black"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Loading;