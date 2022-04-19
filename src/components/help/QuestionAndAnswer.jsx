// import { useRouter } from "next/router";
import styles from "./QuestionsAndAnswer.module.css";

function QuestionsAndAnswers() {
  // const router = useRouter();

  return (
    <div className={[styles.container, "paragraphfont"].join(" ")}>
      {router.locale == "en-US" ? (
        <ul className={styles.textcontainer}>
          <li>
            <span className={styles.question}>
              How long does it take to submit a service?
            </span>
            <br />
            <span className={styles.answer}>
              Depending on the service provided by the client We at RCS tell you
              when we need to.Example- When a client submits a web application,
              it discusses with the RCS with the client what features the client
              wants to add to that web application, and then informs the client
              of the final action that they want to add and then we tell you how
              much time will need.
            </span>
          </li>
          <li>
            <span className={styles.question}>
              What are the benefits of having a website?
            </span>
            <br />
            <span className={styles.answer}>
              Having a website allows you to share what your client wants to
              publish in one place. According to the website, the internet can
              be accessed from any client using the client&apos;s phone, tablet,
              or computer. Example- Once the client has asked about the
              client&apos;s company via messenger, it can be time consuming for
              the client to follow through. Therefore, as a client, you can save
              time by giving your website address (https://www.example.com) and
              learning about our company here.
            </span>
          </li>
          <li>
            <span className={styles.question}>
              What is the difference between Website and Web application?
            </span>
            <br />
            <span className={styles.answer}>
              A website is where the web developer provides the content that the
              client wants to display on the website. Therefore, the client will
              not be able to edit the content. In what situations should it be
              used? What the client wants to convey does not change all the
              time. It changes only once a year. There is not much change. It
              should be used in such situations.
            </span>
            <br />
            <span className={styles.answer}>
              A web application allows you to change the data displayed by the
              client at any time. Interact with users, not just display data. It
              has more advanced functions than a website, such as the ability to
              manage your company as a client.
            </span>
          </li>
          <li>
            <span className={styles.question}>
              What are the benefits of having a web application?
            </span>
            <br />
            <span className={styles.answer}>
              With a web application, you can manage your business anywhere,
              anytime with just the internet. And if you have multiple branches,
              you can manage them all in one place.
            </span>
          </li>
          <li>
            <span className={styles.question}>
              Can you write an iOS application?
            </span>
            <br />
            <span className={styles.answer}>
              Yes. No service for iOS application yet. If you provide services
              for the IOS application, we will advertise on our website.
            </span>
          </li>
          <li>
            <span className={styles.question}>
              What kind of business is the Android application suitable for?
            </span>
            <br />
            <span className={styles.answer}>
              In an Android application, there are two possible scenarios.
              Offline and online android application.
            </span>
            <br />
            <span className={styles.answer}>
              As a client business, you have very little data to manage. I
              don&apos;t want to use the internet either. If your data is for
              one store, you should use an offline android application.
            </span>
            <br />
            <span className={styles.answer}>
              If this does not work, you should use an online android
              application.
            </span>
            <br />
            <span className={styles.answer}>
              As a client, you can choose the type that suits your business in
              consultation with our RCS team.
            </span>
          </li>
        </ul>
      ) : (
        <ul className={styles.textcontainer}>
          <li>
            <span className={styles.question}>
              Service တစ်ခုအပ်ရင် အချိန် ဘယ်လောက် လောက် ယူလဲ။
            </span>
            <br />
            <span className={styles.answer}>
              Client တို့ အပ်လိုက်သည့် service ပေါ်မှာ မူတည့်ပြီးတော့
              ကျွန်တော်တို့ RCS ဘက်မှ လိုအပ်သည့် အချိန်ကို ပြောပေးပါတယ်။ ဥပမာ
              client က web application တစ်ခု အပ်လိုက်လျှင် ထို web application
              မှာ client က ဘယ်လို လုပ်ဆောင်ချက်မျိုးတွေ ထည့်ချင်တာလဲ ဆိုတာ ကို
              RCS နှင့် client နဲ့ ဆွေးနွေးပြီး နောက်ဆုံး client ဘက်က
              ထည့်ချင်သည့် လုပ်ဆောင်ချက်တွေကို သိပြီးလျှင် အချိန်ကို
              ပြောပေးပါတယ်။
            </span>
          </li>
          <li>
            <span className={styles.question}>
              Website ရှိခြင်းဖြင့် ဘာအကျိုးကျေးဇူးတွေ ရမှာလဲ။
            </span>
            <br />
            <span className={styles.answer}>
              Website ရှိခြင်းဖြင့် client ဖော်ပြချင်သည့် အကြောင်းရာကို
              တစ်နေရာထဲ ကနေပြီး ဖော်ပြနိုင်ပါတယ်။ Website ရဲ့ သဘောအရ internet
              ရှိသည့် ဘယ်နေရာကမဆို client ရဲ့ phone, tablet, or computer ကို
              သုံးပြီး ကြည့်နိုင်ပါတယ်။ဥပမာ client ရဲ့ company အကြောင်းကို
              messenger ကနေ လာမေးပြီ ဆိုလျှင် client အနေနဲ့ မေးခွန်းတွေကို
              လိုက်ဖြေရမယ် ဆိုလျှင် အချိန်ကုန်နိုင်ပါတယ်။ ထို့ကြောင့် client
              အနေနဲ့ ကျွန်တော်တို့ company အကြောင်းကို client ရဲ့ website
              address (https://www.example.com) ပေးပြီးပြီး ဒီနေရာမှာ
              လေ့လာနိုင်ပါတယ်လို့ ပြောလိုက်ချင်းဖြင့် အချိန်ကုန်သက်သာစေပါတယ်။
            </span>
          </li>
          <li>
            <span className={styles.question}>
              Website and Web application ဘာကွာတာလဲ။
            </span>
            <br />
            <span className={styles.answer}>
              Website ဆိုတာ client တို့ website ပေါ်မှာ ဖော်ပြချင်တဲ့
              အကြောင်းရာတွေကို web developer တွေဘက်က ထည့်ပေးရတယ်။ ထို့ကြောင့်
              client တွေဘက်က အကြောင်းရာတွေကို ပြင်နိုင်မှာ မဟုတ်ပါဘူး။ ဘယ်လို
              ခြေနေမျိုးတွေမှာ သုံးသင့်သလဲ ဆိုလျှင် client ဘက်က မိမိ
              ဖော်ပြချင်တဲ့ အကြောင်းရာတွေက အချိန်တိုင်း မပြောင်းလဲဘူး၊ တစ်နှစ်မှ
              တစ်ခါလောက်ပဲ ပြောင်းလဲတာမျိုး၊ ပြောင်းလဲနိုင်ချေ သိပ်မများဘူး၊
              အဲလိုခြေနေမျိုးမှာဆိုရင် သုံးသင့်ပါတယ်။
            </span>
            <br />
            <span className={styles.answer}>
              Web application ဆိုတာ client အနေနဲ့ ဖော်ပြထားတဲ့ data တွေက
              အချိန်မရွေး ပြောင်းနိုင်ခြင်း၊ data ကို ပြရုံသက်သက် မဟုတ်တော့ပဲ
              user တွေနဲ့ အပြန်အလှန် ဆက်သွယ်နိုင်ခြင်း၊ client အနေနှင့် မိမိ
              company ကို management လုပ်ဆောင်နိုင်ခြင်း အစရှိသည့် website ထက်
              အဆင့်မြင့်သော လုပ်ဆိုင်ချက်များ ပါလာပါတယ်။
            </span>
          </li>
          <li>
            <span className={styles.question}>
              Web application ရှိခြင်းဖြင့် ဘာအကျိုးကျေးဇူးတွေ ရမှာလဲ။
            </span>
            <br />
            <span className={styles.answer}>
              Web application ရှိခြင်းဖြင့် client အနေဖြင့် မိမိရဲ့ လုပ်ငန်းကို
              နေရာမရွေး အချိန်မရွေး အင်တာနက်ရှိရုံဖြင့် management
              လုပ်နိုင်ပါတယ်။ ဒါပြင် လုပ်ငန်းဆိုင်ခွဲအများအပြား ရှိခဲ့လျှင်လည်း
              အားလုံးကို တစ်နေရာထဲကနေ management လုပ်နိုင်ပါတယ်။
            </span>
          </li>
          <li>
            <span className={styles.question}>
              IOS application ကိုရော ရေးပေးလား။
            </span>
            <br />
            <span className={styles.answer}>
              ဟုတ်ကဲ့ပါဗျ။ IOS application အတွက်တော့ ဝန်ဆောင်မှု မပေးသေးပါဘူးဗျ။
              တကယ်လို့ IOS application တွက် ဝန်ဆောင်မှု ပေးခဲ့လျှင်
              ကျွန်တော်တို့ website မှာ ကြော်ငြာပေးသွားမှာပါ။
            </span>
          </li>
          <li>
            <span className={styles.question}>
              Android application က ဘယ်လို လုပ်ငန်းမျိုးနဲ့ သင့်တော်လဲ။
            </span>
            <br />
            <span className={styles.answer}>
              Android application မှာ ဆို အခြေနေက နှစ်မျိုး ရှိနိုင်ပါတယ်။
              offline နှင့် online android application ဖြစ်ပါတယ်။
            </span>
            <br />
            <span className={styles.answer}>
              Client ရဲ့ လုပ်ငန်းအနေနဲ့ management လုပ်ရမယ့် data က အနဲငယ်ပဲ
              ရှိမယ်၊ internet ကိုလည်း မသုံးချင်ဘူး၊ မိမိရဲ့ data
              ကလည်းတစ်ဆိုင်တည်းတွက်ပဲ ဆိုလျှင် offline android application ကို
              သုံးသင့်ပါတယ်။
            </span>
            <br />
            <span className={styles.answer}>
              အပေါ်ကအချက်တွေနဲ့ မတူတော့ဘူး ဆိုလျှင်တော့ online android
              application ကို သုံးသင့်ပါတယ်။
            </span>
            <br />
            <span className={styles.answer}>
              Client အနေဖြင့် မိမိ လုပ်ငန်းနှင့် သင့်တော်မယ် ထင်သည့်
              အမျိုးအစားကို ကျွန်တော်တို့ RCS team နှင့် တိုင်ပင်ပြီး
              ရွေးချယ်နိုင်ပါတယ်။
            </span>
          </li>
        </ul>
      )}
    </div>
  );
}

export default QuestionsAndAnswers;
