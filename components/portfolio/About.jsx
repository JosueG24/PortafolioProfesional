import Knowledge from "./Knowledge";
import styles from "../../styles/modules/About.module.css"

function About(){
    return(
        <section className={styles.sectionAbout}>
            <div className={styles.sectionAbout__div1}>
            <div className={styles.sectionAbout__div1__subDiv1}>
                <h2 className={styles.sectionAbout__div1__subDiv1H2} id="AboutArea">Sobre mi :</h2>
                <br/>
                <p className={styles.sectionAbout__div1__subDiv1P}>Hola, mi nombre es Josue Guzman y soy un joven autodidacta al que le encanta la programación.</p>
                <p className={styles.sectionAbout__div1__subDiv1P}>Luego de terminar mis estudios diversificados comencé con mi aventura de aprendizaje y hoy te voy a contar sobre todo lo que e aprendido.</p>
                <div className={styles.sectionAbout__div1__subDiv1ContainerBtn}>
                    <a href="https://drive.google.com/uc?export=download&id=1TemQ0cvHIE-lM5CEVKmo811rCG5k_lua" className={styles.sectionAbout__div1__subDiv1Btn}>Descarga mi CV</a>
                </div>
            </div>
            <div className={styles.sectionAbout__div1__subDiv2}>
                <img  className={styles.sectionAbout__div1__subDiv2IMG} src="/PandaLaptopTrans.png" />
            </div>
            </div>
            <div className={styles.sectionAbout__div2}>
                <h2 className={styles.sectionAbout__div2__h2Knowledge}> - Mis conocimientos</h2>
                <br/>
                <p className={styles.sectionAbout__div2__pKnowledge}>Trabajo principal mente con JavaScript y en conjunto con nodeJS. Prefiero desarroyar mis proyectos con NextJs y React. Todo el tiempo estoy aprendiendo nuevas tecnologías.</p>
                <br/>
                <div className={styles.divConocimientos}>
                    <Knowledge/>
                </div>
            </div>
        </section>
    )
}

export default About;