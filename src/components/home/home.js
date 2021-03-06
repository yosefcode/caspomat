import "./home.css";
import Pchome from "./pchome.jpg";

function Home() {
  return (
    <div className="home">
      <h4>
        רוצים להרוויח כסף מהבית? רוצים הכנסה נוספת? בשביל זה הקמנו עבורכם את אתר
        כספומט.
      </h4>
      <h5>
        באתר כספומט נלמד ונדריך אתכם כיצד ניתן להרוויח כסף מהבית ללא ידע מוקדם
        ללא נסיון בזמן ובשעות שנוחים לכם וכל זה ללא כל השקעה כספית. כן כן הכל
        בחינם... כל מה שצריך זה מחשב נייד, אינטרנט וכוס קפה...
      </h5>
      <h4>אז למי זה מתאים?</h4>
      <h5>
        עבודה מהבית יכולה להתאים ולהיות טובה לבני נוער שרוצים להרוויח קצת דמי
        כיס בשעות הפנאי, לעקרות בית, לאמהות שנשארות עם התינוק בבית אחרי לידה או
        סתם ככה לכל מי שרוצה להוסיף הכנסה נוספת מי מאיתנו לא רוצה להרוויח עוד
        קצת כסף מהצד בשביל טיסה לחו"ל או מחשב חדש או נופש או כל רעיון אחר הבעיה
        שלא תמיד זה מתאפשר לנו עם כל המירוץ וההוצאות היומיומיות. לאף אחד לא היה
        מזיק הכנסה נוספת בדיוק בשביל זה הקמנו את אתר כספומט.
      </h5>
      <img className="pchome" src={Pchome} alt="" />
      <h4>מה היתרונות של עבודה מהבית?</h4>
      <h5>
        <li>אין צורך לקום מוקדם לרוץ לעבודה.</li>
        <li>אין בוסים על הראש – את/ה הבוס של עצמך!</li>
        <li>לא צריך להתארגן שעות ולהתקע שעות בפקקים.</li>
        <li>
          את/ה עובד/ת בשעות הנוחות לך. אחרי הלימודים. בלילה מאוחר. או בכל זמן
          שמתאים לך ורק לך.
        </li>
        <li>אפשר לשלב מספר עבודות במספר תחומים.</li>
        <li>
          והכי חשוב... את/ה יכול/ה לייצר הכנסה בפיג'מה מהמיטה או מהספה בסלון.
        </li>
      </h5>
      <div>
        <h4>אילו סוגי עבודות אפשר לעבוד מהבית?</h4>
        <h5>
          האמת שאין ספור עבודות אפשר לעבוד מהבית הן כשכירים ובוודאי כפרילנס
          העבודה מהבית נכנסת לתודעה יותר ויותר כדבר טוב ויעיל. האפשרויות הן
          מגוונות תיכנות גרפיקה בניית אתרים הקלדות תמלול תרגום פרסום ברשת בכלל
          וברשתות חברתיות בפרט שירות לקוחות ועוד ועוד. פעמים רבות שווה למעסיק
          להעסיק את העובד מהבית ובכך הוא חוסך עלויות משרד אחזקה נסיעות וכיו"ב.
        </h5>
        <h5>
          באתר כספומט אספנו עבורכם עבודות ואפשרויות לעבודה מהבית ללא צורך בידע
          מוקדם כגון
          <li>
            <a className="link-button" href="/סקרים-בתשלום/b">
              מילוי סקרים בתשלום
            </a>
          </li>{" "}
          <li>
            <a className="link-button" href="/שיווק-שותפים/c">
              שיווק שותפים{" "}
            </a>{" "}
          </li>
          כמובן כל הדברים המומלצים כאן באתר אלו מקומות שבדקנו ונוכחנו כי הם
          אמינים ומשלמים ללא התחכמויות.
        </h5>
      </div>
    </div>
  );
}

export default Home;
