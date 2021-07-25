import { Engine, Sprite, SpriteSheet, vec, Animation, Vector } from "excalibur";
import { LevelBuildingHelper } from "./levelBuildingHelper";

export abstract class AnimationHelper {
    public static getScaledAnimation (engine:Engine, spritesheet:SpriteSheet, startIndex:number, endIndex:number, scaleFactor:number = 1, speed:number = 100): Animation {
        let a:Animation = spritesheet.getAnimationBetween(engine, startIndex, endIndex, speed);
        
        let scaleX = LevelBuildingHelper.tileHeight / a.width * scaleFactor;
        let scaleY = LevelBuildingHelper.tileHeight / a.height * scaleFactor;
        a.scale = vec(scaleX, scaleY);

        return a;
    }

    public static getScaledSprite (sprite:Sprite, scaleFactor:number = 1): Sprite {
        let scaleX = LevelBuildingHelper.tileHeight / sprite.width * scaleFactor;
        let scaleY = LevelBuildingHelper.tileHeight / sprite.height * scaleFactor;
        let nSpr = sprite.clone();
        nSpr.scale = vec(scaleX, scaleY);

        return nSpr;
    }

    public static drawLine (ctx: CanvasRenderingContext2D, startPoint:Vector, endPoint:Vector, lineWidth:number, lineColorHex:string) {
        ctx.beginPath();
        ctx.moveTo(startPoint.x,startPoint.y);
        ctx.lineTo(endPoint.x, endPoint.y);
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = lineColorHex;
        ctx.stroke();
    }
}