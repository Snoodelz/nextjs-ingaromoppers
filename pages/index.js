import Head from "next/head";
import Image from "next/image";
import logo from "../img/moppersLogga.png";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />

      <main className=" max-w-4xl mx-auto">
        <Image
          src={logo}
          objectPosition="center top"
          alt="Moppers logo"
          layout="intrinsic"
        />
        <em>We are moppers</em>
        <div className="avatar-group -space-x-6">
          <div className="avatar">
            <div className="w-12">
              <img src="https://scontent.fath3-4.fna.fbcdn.net/v/t1.6435-1/92951835_3680488471977552_4810835259576811520_n.jpg?stp=dst-jpg_p100x100&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=ruCfrZFNxfYAX9M2v0-&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fath3-4.fna&oh=00_AT-YSr6ttG9f60jmWz5GIZ9vzLl3VNew2FayEmDhw9xMkw&oe=62E65308" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-12">
              <img src="https://scontent.fath3-3.fna.fbcdn.net/v/t1.6435-1/57393199_2158475394189249_5431572971468619776_n.jpg?stp=dst-jpg_p100x100&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=vGLRssxjU0oAX-B-pZL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fath3-3.fna&oh=00_AT_a20FyDyGqu6NnPiJeJpTp08034of7ON4tQvPRBVo-qA&oe=62E4358B" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-12">
              <img src="https://scontent.fath3-4.fna.fbcdn.net/v/t39.30808-1/291509474_5496676610353512_4252194792316095588_n.jpg?stp=dst-jpg_p100x100&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=KSvNBymPjGUAX-u7OjC&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fath3-4.fna&oh=00_AT9fDhQcDzO0UNm5ELToAuF_ZyTf3I0qJ3yJGPzYgh9nug&oe=62C319B7" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-12">
              <img src="https://scontent.fath3-4.fna.fbcdn.net/v/t1.18169-1/389137_437735556265962_1696465757_n.jpg?stp=c218.38.474.473a_dst-jpg_s100x100&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=fXn4UvGkVZEAX9U2gF7&_nc_oc=AQnobwNgZX1omM5VsRIzF1ZLwP6o_tLMOdavxmUl6OvQIG7yOVTxXSGJcnMt0qov5gk&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fath3-4.fna&oh=00_AT_1DsWD0RaYOQA7YEt4Au3iRyNgm0dJR2MY2xpcNLIWtg&oe=62E55C4C" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-12">
              <img src="https://scontent.fath3-4.fna.fbcdn.net/v/t1.18169-1/21077521_1125011200964086_3198769526153246647_n.jpg?stp=dst-jpg_p100x100&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=U8Bf5vrN0_oAX8mZP2M&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fath3-4.fna&oh=00_AT_lFAH6YBXz-FLMuH_hTFA3GJGQe9vtgcRh_1msTYD0bw&oe=62E5E443" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-12">
              <img src="https://scontent.fath3-3.fna.fbcdn.net/v/t31.18172-1/11416405_1082238501827616_88997180176341473_o.jpg?stp=dst-jpg_p100x100&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=xfdZ8aQFwxEAX_BP2kM&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fath3-3.fna&oh=00_AT9Tll98fpGCwydcrykTj23pv8rTxiswu8zqTNP9icVhIw&oe=62E650DE" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-12">
              <img src="https://scontent.fath3-4.fna.fbcdn.net/v/t1.6435-1/116890883_10158330208784333_8510656499278224746_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=kdd9UD1N-wgAX89fEVR&_nc_oc=AQktswh3tQjjzlmF51es56-NbUteFFOogOr5EB12HhVw-1XBxky7BZIpELIwJso2fXg&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fath3-4.fna&oh=00_AT_nnDg3cQBzu_lMB3O5rF-tHPRkf9awK2tDWuDtVwLTPg&oe=62E3292E" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-12">
              <img src="https://scontent.fath3-4.fna.fbcdn.net/v/t1.6435-1/67480225_2321304451283843_3744627525473533952_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=T1b6csDcI_UAX-7EyTs&_nc_ht=scontent.fath3-4.fna&oh=00_AT8tbsfoUSjH8d653pOOf8qbjXm1VxnjVPGiaKw06Oq54A&oe=62E58EB0" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
