"use client";
// import Image from "next/image";
import Link from "next/link";
import useBodyClass from '@/components/useBodyClass'; // Adjust path as needed
import PageTitleWave from '@/components/PageTitleWave';

export default function CompletedLiaisonbankPage() {
  useBodyClass('completed');
  return (
    <>
      <div className="page-header">
        <div className="inner-header">
          <PageTitleWave />
          <div className="page-title">
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-lg-10">
                  <div className="theme-breadcrumb-box">
                    <h1>Completed</h1>

                    <nav aria-label="breadcrumb" className="page-breadcrumb">
                      <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item">
                          <Link href="/">
                            <i className="bi bi-house-door me-1" aria-hidden="true"></i>
                            Home
                          </Link>
                        </li>

                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Completed Projects
                        </li>
                      </ol>
                    </nav>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="container py-5">
        <div className="row justify-content-center text-center">
          <div className="col-12">
            <div className="table-container">
              <table className="project-table border table-bordered w-75 mx-auto completed">
                <thead>
                  <tr>
                    <th>Sr. No</th>
                    <th>Client Name</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>1</td><td>Geeta Clinic</td><td>Dadar (W)</td></tr>
                  <tr><td>2</td><td>Geeta Clinic</td><td>Mahim (W)</td></tr>
                  <tr><td>3</td><td>Khandeparkar Nursing Home</td><td>Dadar (E)</td></tr>
                  <tr><td>4</td><td>Poush Restaurant</td><td>Malad (W)</td></tr>
                  <tr><td>5</td><td>Pizza Hut</td><td>Malad (W)</td></tr>
                  <tr><td>6</td><td>1441 Pizzeria</td><td>Malad (W)</td></tr>
                  <tr><td>7</td><td>Café Venture</td><td>Malad (W)</td></tr>
                  <tr><td>8</td><td>Ferry Warf</td><td>Malad (W)</td></tr>
                  <tr><td>9</td><td>Sammy Sosa</td><td>Oshiwara</td></tr>
                  <tr><td>10</td><td>Persia Darbar (Shop 13 &amp; 14)</td><td>Malad (W)</td></tr>
                  <tr><td>11</td><td>Persia Darbar (Near Kotkar Industry)</td><td>Goregaon (E)</td></tr>
                  <tr><td>12</td><td>LIC Building</td><td>Borivali (W)</td></tr>
                  <tr><td>13</td><td>WokExpress</td><td>Malad (W)</td></tr>
                  <tr><td>14</td><td>Godrej Café – The Club (Gym)</td><td>Vikhroli (W)</td></tr>
                  <tr><td>15</td><td>Godrej – The Club Restaurant</td><td>Vikhroli (W)</td></tr>
                  <tr><td>16</td><td>Zebro Foods</td><td>Chembur (E)</td></tr>
                  <tr><td>17</td><td>Bombay Bay Leaf</td><td>Andheri</td></tr>
                  <tr><td>18</td><td>D’ Monte Park</td><td>Bandra (W)</td></tr>
                  <tr><td>19</td><td>Sunil Kowli’s Surgical Clinic</td><td>Dadar (W)</td></tr>
                  <tr><td>20</td><td>Sunaina Eye Care Centre</td><td>Dadar (W)</td></tr>

                  <tr><td>21</td><td>Fatty Bao</td><td>Andheri (W)</td></tr>
                  <tr><td>22</td><td>Nawabia Caterers</td><td>Grant Road</td></tr>
                  <tr><td>23</td><td>Pallavi Restaurant</td><td>Goregaon (E)</td></tr>
                  <tr><td>24</td><td>Ruchi Food</td><td>Jogeshwari (W)</td></tr>
                  <tr><td>25</td><td>Shalimar</td><td>Jogeshwari (W)</td></tr>
                  <tr><td>26</td><td>Rigmor Coffee</td><td>Vikhroli (E)</td></tr>
                  <tr><td>27</td><td>Rigmor Coffee</td><td>Bandra (E)</td></tr>
                  <tr><td>28</td><td>Sigdi The Restaurant</td><td>Bandra (W)</td></tr>
                  <tr><td>29</td><td>Sigdi The Restaurant</td><td>Bandra (W)</td></tr>
                  <tr><td>30</td><td>Dian Beverage &amp; Foods</td><td>Malad (W)</td></tr>
                  <tr><td>31</td><td>Bollyfood Cafe</td><td>Powai</td></tr>
                  <tr><td>32</td><td>Persia Darbar</td><td>Andheri (W)</td></tr>
                  <tr><td>33</td><td>Persia Darbar</td><td>Jogeshwari (W)</td></tr>
                  <tr><td>34</td><td>Persian Darbar</td><td>Byculla</td></tr>
                  <tr><td>35</td><td>Persian Darbar Takeaway</td><td>Byculla</td></tr>
                  <tr><td>36</td><td>Dr. Keiki Mehta International Eye Hospital</td><td>Colaba</td></tr>
                  <tr><td>37</td><td>Hotel Supreme</td><td>Colaba</td></tr>
                  <tr><td>38</td><td>Water Front (Mittal Builders)</td><td>Colaba</td></tr>
                  <tr><td>39</td><td>Dr. Animesh Gandhi (Delight Multi-Specialty Hospital)</td><td>Wadala</td></tr>
                  <tr><td>40</td><td>Jaslok Hospital</td><td>Peddar Road</td></tr>

                  <tr><td>41</td><td>H.K. Export India Pvt. Ltd. – Zest</td><td>Worli</td></tr>
                  <tr><td>42</td><td>Oriental Palace</td><td>Bandra (W)</td></tr>
                  <tr><td>43</td><td>Hotel Mini Punjab</td><td>Khar (W)</td></tr>
                  <tr><td>44</td><td>Saheb Restaurant (Hill Road)</td><td>Bandra (W)</td></tr>
                  <tr><td>45</td><td>Marks &amp; Spencer</td><td>Bandra (W)</td></tr>
                  <tr><td>46</td><td>World of Titan</td><td>Bandra (W)</td></tr>
                  <tr><td>47</td><td>Puja Casa</td><td>Bandra (W)</td></tr>
                  <tr><td>48</td><td>Hotel Alfa</td><td>Pali Hill, Bandra (W)</td></tr>
                  <tr><td>49</td><td>Paneri Villa</td><td>Bandra (W)</td></tr>

                  <tr><td>50</td><td>5 Spice</td><td>Bandra (W)</td></tr>
                  <tr><td>51</td><td>5 Spice</td><td>Santacruz (W)</td></tr>
                  <tr><td>52</td><td>5 Spice</td><td>Malad (W)</td></tr>
                  <tr><td>53</td><td>5 Spice</td><td>Oshiwara</td></tr>
                  <tr><td>54</td><td>5 Spice</td><td>Andheri (W)</td></tr>
                  <tr><td>55</td><td>5 Spice</td><td>Khar (W)</td></tr>

                  <tr><td>56</td><td>Domino’s Pizza</td><td>Malad (W)</td></tr>
                  <tr><td>57</td><td>Domino’s Pizza</td><td>Vile Parle (W)</td></tr>
                  <tr><td>58</td><td>Domino’s Pizza</td><td>Wadala</td></tr>
                  <tr><td>59</td><td>Domino’s Pizza</td><td>Kandivali (W)</td></tr>
                  <tr><td>60</td><td>Domino’s Pizza</td><td>Kandivali (E) / Govandi</td></tr>

                  <tr><td>121</td><td>Vinanajay</td><td>Santacruz (E)</td></tr>
                  <tr><td>122</td><td>Piramal Mahalaxmi</td><td>Mahalaxmi / Byculla</td></tr>
                  <tr><td>123</td><td>Piramal Arayana</td><td>Mulund</td></tr>
                  <tr><td>124</td><td>Piramal Revanta</td><td>Mulund</td></tr>
                  <tr><td>125</td><td>Piramal Vaikunth</td><td>Thane</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

