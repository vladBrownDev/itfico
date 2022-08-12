import './BigCourse.css';
import home from "../img/homeIcon.png"
import navArrow from "../img/navArrow.png"
import { useState } from 'react';
import { Link } from "react-router-dom"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import bigpic from "../img/articleBig.png"
import img1 from "../img/articles/small1.png"
import img2 from "../img/articles/smal2.png"
import img3 from "../img/articles/small3.png"
import img4 from "../img/articles/small4.png"
import img5 from "../img/articles/small5.png"
import code1 from "../img/code1.png"
import code2 from "../img/code2.png"

function BigCourse() {
    let [isExpanded,changeExpand] = useState(false)
    function expandToggle () {
        isExpanded ? changeExpand(false) : changeExpand(true)
    }
    return (
        <>
        <section id="bigCourse">
            <div className='smallNavbar'>
                    <img src={home} alt="" />
                    <Link to="/">Головна</Link>
                    <img src={navArrow} alt="" />
                    <div>Курси</div>
                    <img src={navArrow} alt="" />
                    <div>Класи, структури та об'єкти</div>
            </div>
            <div id="mainBigCourse">
                <div id="accordShell">
                    <Accordion className="bigCourseAccordion">
                        <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className='accordHeadShell'
                        
                        >
                            <Typography className='accordHead'>
                                <span className='num'>01.</span>
                                <span className='accordText'>Вступ до C#</span> 
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className='accordDetails'>
                        <Typography className='accordOpen'>
                        <div className='detailsList'>
                                <div>1. Класи та об'єкти</div>
                                <div>2. Конструкції</div>
                                <div>3. Перевантаження методу</div>
                                <div>4. Поля Const і Readonly</div>
                                <div>5. Додавання класів та основного методу</div>
                                <div>6. Структура</div>
                                <div>7. Типи значень і довідкові типи</div>
                                <div>8. Клас проти структури</div>
                            </div>
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="bigCourseAccordion">
                        <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className='accordHeadShell'
                        >
                            <Typography className='accordHead'>
                                <span className='num'>02.</span>
                                <span className='accordText'>Основи C#</span> 
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className='accordDetails'>
                        <Typography className='accordOpen'>
                        <div className='detailsList'>
                                <div>1. Класи та об'єкти</div>
                                <div>2. Конструкції</div>
                                <div>3. Перевантаження методу</div>
                                <div>4. Поля Const і Readonly</div>
                                <div>5. Додавання класів та основного методу</div>
                                <div>6. Структура</div>
                                <div>7. Типи значень і довідкові типи</div>
                                <div>8. Клас проти структури</div>
                            </div>
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="bigCourseAccordion">
                        <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className='accordHeadShell'
                        >
                            <Typography className='accordHead'>
                                <span className='num'>03.</span>
                                <span className='accordText'>Класи, структури та об'єкти</span> 
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className='accordDetails'>
                        <Typography className='accordOpen'>
                        <div className='detailsList'>
                                <div>1. Класи та об'єкти</div>
                                <div>2. Конструкції</div>
                                <div>3. Перевантаження методу</div>
                                <div>4. Поля Const і Readonly</div>
                                <div>5. Додавання класів та основного методу</div>
                                <div>6. Структура</div>
                                <div>7. Типи значень і довідкові типи</div>
                                <div>8. Клас проти структури</div>
                            </div>
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion  className="bigCourseAccordion">
                        <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className='accordHeadShell'
                        >
                            <Typography className='accordHead'>
                                <span className='num'>04.</span>
                                <span className='accordText'>Спадковість і поліморфізм</span> 
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className='accordDetails'>
                        <Typography className='accordOpen'>
                        <div className='detailsList'>
                                <div>1. Класи та об'єкти</div>
                                <div>2. Конструкції</div>
                                <div>3. Перевантаження методу</div>
                                <div>4. Поля Const і Readonly</div>
                                <div>5. Додавання класів та основного методу</div>
                                <div>6. Структура</div>
                                <div>7. Типи значень і довідкові типи</div>
                                <div>8. Клас проти структури</div>
                            </div>
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="bigCourseAccordion">
                        <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className='accordHeadShell'
                        >
                            <Typography className='accordHead'>
                                <span className='num'>05.</span>
                                <span className='accordText'>Обробка винятків</span> 
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className='accordDetails'>
                        <Typography className='accordOpen'>
                        <div className='detailsList'>
                                <div>1. Класи та об'єкти</div>
                                <div>2. Конструкції</div>
                                <div>3. Перевантаження методу</div>
                                <div>4. Поля Const і Readonly</div>
                                <div>5. Додавання класів та основного методу</div>
                                <div>6. Структура</div>
                                <div>7. Типи значень і довідкові типи</div>
                                <div>8. Клас проти структури</div>
                            </div>
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="bigCourseAccordion">
                        <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className='accordHeadShell'
                        >
                            <Typography className='accordHead'>
                                <span className='num'>06.</span>
                                <span className='accordText'>Інтерфейси</span> 
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className='accordDetails'>
                        <Typography className='accordOpen'>
                        <div className='detailsList'>
                                <div>1. Класи та об'єкти</div>
                                <div>2. Конструкції</div>
                                <div>3. Перевантаження методу</div>
                                <div>4. Поля Const і Readonly</div>
                                <div>5. Додавання класів та основного методу</div>
                                <div>6. Структура</div>
                                <div>7. Типи значень і довідкові типи</div>
                                <div>8. Клас проти структури</div>
                            </div>
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="bigCourseAccordion">
                        <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className='accordHeadShell'
                        >
                            <Typography className='accordHead'>
                                <span className='num'>07.</span>
                                <span className='accordText'>Делегати, події та лямбда</span> 
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className='accordDetails'>
                        <Typography className='accordOpen'>
                        <div className='detailsList'>
                                <div>1. Класи та об'єкти</div>
                                <div>2. Конструкції</div>
                                <div>3. Перевантаження методу</div>
                                <div>4. Поля Const і Readonly</div>
                                <div>5. Додавання класів та основного методу</div>
                                <div>6. Структура</div>
                                <div>7. Типи значень і довідкові типи</div>
                                <div>8. Клас проти структури</div>
                            </div>
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="bigCourseAccordion">
                        <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className='accordHeadShell'
                        >
                            <Typography className='accordHead'>
                                <span className='num'>08.</span>
                                <span className='accordText'>Рядки, масив і DateTime</span> 
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className='accordDetails'>
                        <Typography className='accordOpen'>
                            <div className='detailsList'>
                                <div>1. Класи та об'єкти</div>
                                <div>2. Конструкції</div>
                                <div>3. Перевантаження методу</div>
                                <div>4. Поля Const і Readonly</div>
                                <div>5. Додавання класів та основного методу</div>
                                <div>6. Структура</div>
                                <div>7. Типи значень і довідкові типи</div>
                                <div>8. Клас проти структури</div>
                            </div>
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="bigCourseAccordion">
                        <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className='accordHeadShell'
                        >
                            <Typography className='accordHead'>
                                <span className='num'>09.</span>
                                <span className='accordText'>Додаткові можливості ООП</span> 
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className='accordDetails'>
                        <Typography className='accordOpen'>
                            <div className='detailsList'>
                                <div>1. Класи та об'єкти</div>
                                <div>2. Конструкції</div>
                                <div>3. Перевантаження методу</div>
                                <div>4. Поля Const і Readonly</div>
                                <div>5. Додавання класів та основного методу</div>
                                <div>6. Структура</div>
                                <div>7. Типи значень і довідкові типи</div>
                                <div>8. Клас проти структури</div>
                            </div>
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div id="courseText">
                    <div id="courseTextHead">
                        <div>
                            <h4>Класи, структури та об'єкти</h4>
                            <h1>Область застосування (контекст) змінної</h1>
                        </div>
                        <div className='courseNum'>
                            3.9
                        </div>
                        
                    </div>
                    <img className='bigPic' src={bigpic} alt="" />
                    <h2 className='articleH2'>Які можуть виникнути проблеми?</h2>
                    <ul className='articleUl'>
                        <li>Ідейні міркування вищого порядку, а також подальший розвиток </li>
                        <li>Різних форм діяльності забезпечує широкому колу (фахівців) участь у формуванні позицій, </li>
                        <li>Займаних учасниками щодо поставлених завдань. </li>
                        <li>Завдання організації, особливо ж консультація з широким активом є цікавий експеримент перевірки </li>
                    </ul>
                    <p>Ідейні міркування вищого порядку, а також подальший розвиток різних форм діяльності забезпечує широкому колу (фахівців) участь у формуванні позицій, займаних учасниками щодо поставлених завдань. Завдання організації, особливо ж консультація з широким активом є цікавий експеримент перевірки істотних фінансових і адміністративних умов. Не слід, однак забувати, що рамки і місце навчання кадрів вимагають від нас аналізу форм розвитку. Значимість цих проблем настільки очевидна, що консультація </p>
                    <h2 className='articleH2'>Які можуть виникнути проблеми?</h2>
                    <ol className='articleOl'>
                        <li>Ідейні міркування вищого порядку, а також подальший розвиток </li>
                        <li>Різних форм діяльності забезпечує широкому колу (фахівців) участь у формуванні позицій, </li>
                        <li>Займаних учасниками щодо поставлених завдань. </li>
                        <li>Завдання організації, особливо ж консультація з широким активом є цікавий експеримент перевірки </li>
                    </ol>
                    <div className='imagesCont'>
                            <div>
                                <img src={img1} alt="" />
                                <p>Коментар до зображення</p>
                            </div>
                            <div>
                                <img src={img2} alt="" />
                                <p>Коментар до зображення</p>
                            </div>
                    </div>
                    <p>Ідейні міркування вищого порядку, а також подальший розвиток різних форм діяльності забезпечує широкому колу (фахівців) участь у формуванні позицій, займаних учасниками щодо поставлених завдань. Завдання організації, особливо ж консультація з широким активом є цікавий експеримент перевірки істотних фінансових і адміністративних умов. Не слід, однак забувати, що рамки і місце навчання кадрів вимагають від нас аналізу форм розвитку. Значимість цих проблем настільки очевидна, що консультація </p>
                    <div className='imagesCont'>
                            <div>
                                <img src={img3} alt="" />
                                <p>Коментар до зображення</p>
                            </div>
                            <div>
                                <img src={img4} alt="" />
                                <p>Коментар до зображення</p>
                            </div>
                            <div>
                                <img src={img5} alt="" />
                                <p>Коментар до зображення</p>
                            </div>
                    </div>
                    <div className='articleSwitch'>
                        <div className='leftArtSwitch'>
                            <span className='switchArr'>🠐</span>
                            <span>Попередня стаття</span>
                        </div>
                        <div className='rightArtSwitch'>
                            <span>Наступна стаття</span>
                            <span className='switchArr'>🠒</span> 
                        </div>
                    </div>
                    <Accordion expanded={isExpanded} id="taskAccord">
                        <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        expandIcon={<ExpandMoreIcon />}
                        onClick={expandToggle}
                        >
                            <Typography className='taskHead'>
                                <h1>Практичні завдання</h1>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            <div className='taskDown'>
                                <h3>Питання 1</h3>
                                <span>Що виведе наступний код:</span>
                                <img src={code1} alt="" />
                                <Accordion  id="answerAccord">
                                    <AccordionSummary
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    className='answerHeadShell'
                                    expandIcon={<ExpandMoreIcon />}
                                    >
                                        <Typography className='answerHead'>
                                            Відповідь
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography className='answer'>
                                        Ця програма не скомпілюється. Метод Console.WriteLine() намагається вивести на консоль значення змінної Name, однак у програмі немає такої змінної. У програмі є лише змінна name. Але оскільки C# реєстрозалежна мова, то name не еквівалентно Name
                                    </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <h3>Питання 2</h3>
                                <span>Що виведе на консоль наступний код:</span>
                                <img src={code2} alt="" />
                                <Accordion  id="answerAccord">
                                    <AccordionSummary
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    className='answerHeadShell'
                                    expandIcon={<ExpandMoreIcon />}
                                    >
                                        <Typography className='answerHead'>
                                            Відповідь
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography className='answer'>
                                        Tom
                                    </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <h3>Питання 3</h3>
                                <span>Який з наступних параметрів представляє правильне визначення змінних:</span>
                                <img src={code1} alt="" />
                                <Accordion  id="answerAccord">
                                    <AccordionSummary
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    className='answerHeadShell'
                                    expandIcon={<ExpandMoreIcon />}
                                    >
                                        <Typography className='answerHead'>
                                            Відповідь
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography className='answer'>
                                        Ця програма не скомпілюється. Метод Console.WriteLine() намагається вивести на консоль значення змінної Name, однак у програмі немає такої змінної. У програмі є лише змінна name. Але оскільки C# реєстрозалежна мова, то name не еквівалентно Name
                                    </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <div id="expandBut" onClick={expandToggle}>Згорнути</div>
                            </div>
                            
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
            
        </section>
        </>
    )
}

export default BigCourse