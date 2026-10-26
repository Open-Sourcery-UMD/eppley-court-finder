import os
from ultralytics import YOLO

def main() -> None:
    print("program start")

    # Load a COCO-pretrained YOLO26n model
    model = YOLO("yolo26n.pt")

    # Run inference with the YOLO26n model on the 'bus.jpg' image
    results = model("./src/vision/tests/eppley-test-img.jpg")

    print(results)

    for r in results:
        print(f"Detected {len(r)} objects in image")

    # # Train the model on the COCO8 example dataset for 100 epochs
    # results = model.train(data="coco8.yaml", epochs=100, imgsz=640)
