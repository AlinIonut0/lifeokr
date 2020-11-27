import * as React from "react";
import { StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";


export default function ProgressCircle({outerRadius, thickness, completion, backgroundColor, color}) {

	const radius = outerRadius - thickness / 2;
	const size = outerRadius * 2;
	const circumference = radius * 2 * Math.PI;
	return (
		<Svg width={size} height={size} style={styles.container}>
			<Circle 
				stroke={backgroundColor}
				fill="none"
				cx={outerRadius}
				cy={outerRadius}
				r={radius}
				strokeWidth={thickness}
			/>
			<Circle 
				stroke={color}
				fill="none"
				cx={outerRadius}
				cy={outerRadius}
				r={radius}
				strokeDasharray={`${circumference} ${circumference}`}
				strokeDashoffset={(100 - completion) * 2 / 100 * Math.PI * radius}
				strokeWidth={thickness}
			/>
		</Svg>
  );
};

const styles = StyleSheet.create({
  container: {
    transform: [{ rotateZ: "-90deg" }],
  },
});
