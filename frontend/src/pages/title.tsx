import video from "@/assets/pexels_videos_1481903 (1080p).mp4";

export default () => (
  <div
    style={{
      height: "100%",
      position: "relative",
    }}
  >
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "rgba(0,0,0,0.7)",
      }}
    >
      <div />
      <div style={{ fontSize: "xxx-large", textAlign: "center" }}>
        Music Viz
      </div>
      <div style={{ alignSelf: "end" }}>BigO</div>
    </div>
    <video
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        top: 0,
        left: 0,
        objectFit: "cover",
        zIndex: -1,
      }}
      autoplay
      loop
      muted
    >
      <source src={video} type="video/mp4" />
    </video>
  </div>
);
