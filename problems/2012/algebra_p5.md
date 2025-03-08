---
id: fimo_2012_algebra_p5
year: 2012
number: 5
difficulty: medium
topics: ["algebra"]
source: "IMO 2012 Algebra Problem 5"
---

Find all functions \(f: \mathbb{R} \rightarrow \mathbb{R}\) that satisfy the conditions
\[
f(1+x y)-f(x+y)=f(x) f(y) \text { for all } x, y \in \mathbb{R}
\]
and \(f(-1) \neq 0\)


---
The only solution is the function \(f(x)=x-1, x \in \mathbb{R}\).
We set \(g(x)=f(x)+1\) and show that \(g(x)=x\) for all real \(x\). The conditions take the form
\[
g(1+x y)-g(x+y)=(g(x)-1)(g(y)-1) \quad \text { for all } x, y \in \mathbb{R} \text { and } g(-1) \neq 1 .
\]
Denote \(C=g(-1)-1 \neq 0\). Setting \(y=-1\) in (1) gives
\[
g(1-x)-g(x-1)=C(g(x)-1) .
\]
Set \(x=1\) in (2) to obtain \(C(g(1)-1)=0\). Hence \(g(1)=1\) as \(C \neq 0\). Now plugging in \(x=0\) and \(x=2\) yields \(g(0)=0\) and \(g(2)=2\) respectively.
We pass on to the key observations
\[
\begin{array}{ll}
g(x)+g(2-x)=2 & \text { for all } x \in \mathbb{R}, \\
g(x+2)-g(x)=2 & \text { for all } x \in \mathbb{R} .
\end{array}
\]
Replace \(x\) by \(1-x\) in (2), then change \(x\) to \(-x\) in the resulting equation. We obtain the relations \(g(x)-g(-x)=C(g(1-x)-1), g(-x)-g(x)=C(g(1+x)-1)\). Then adding them up leads to \(C(g(1-x)+g(1+x)-2)=0\). Thus \(C \neq 0\) implies (3).
Let \(u, v\) be such that \(u+v=1\). Apply (1) to the pairs \((u, v)\) and \((2-u, 2-v)\) :
\[
g(1+u v)-g(1)=(g(u)-1)(g(v)-1), \quad g(3+u v)-g(3)=(g(2-u)-1)(g(2-v)-1) .
\]
Observe that the last two equations have equal right-hand sides by (3). Hence \(u+v=1\) implies
\[
g(u v+3)-g(u v+1)=g(3)-g(1) .
\]
Each \(x \leq 5 / 4\) is expressible in the form \(x=u v+1\) with \(u+v=1\) (the quadratic function \(t^{2}-t+(x-1)\) has real roots for \(\left.x \leq 5 / 4\right)\). Hence \(g(x+2)-g(x)=g(3)-g(1)\) whenever \(x \leq 5 / 4\). Because \(g(x)=x\) holds for \(x=0,1,2\), setting \(x=0\) yields \(g(3)=3\). This proves (4) for \(x \leq 5 / 4\). If \(x > 5 / 4\) then \(-x < 5 / 4\) and so \(g(2-x)-g(-x)=2\) by the above. On the other hand (3) gives \(g(x)=2-g(2-x), g(x+2)=2-g(-x)\), so that \(g(x+2)-g(x)=g(2-x)-g(-x)=2\). Thus (4) is true for all \(x \in \mathbb{R}\).
Now replace \(x\) by \(-x\) in (3) to obtain \(g(-x)+g(2+x)=2\). In view of (4) this leads to \(g(x)+g(-x)=0\), i. e. \(g(-x)=-g(x)\) for all \(x\). Taking this into account, we apply (1) to the pairs \((-x, y)\) and \((x,-y)\) :
\(g(1-x y)-g(-x+y)=(g(x)+1)(1-g(y)), \quad g(1-x y)-g(x-y)=(1-g(x))(g(y)+1)\).
Adding up yields \(g(1-x y)=1-g(x) g(y)\). Then \(g(1+x y)=1+g(x) g(y)\) by (3). Now the original equation (1) takes the form \(g(x+y)=g(x)+g(y)\). Hence \(g\) is additive.
By additvity \(g(1+x y)=g(1)+g(x y)=1+g(x y)\); since \(g(1+x y)=1+g(x) g(y)\) was shown above, we also have \(g(x y)=g(x) g(y)(g\) is multiplicative \()\). In particular \(y=x\) gives \(g\left(x^{2}\right)=g(x)^{2} \geq 0\) for all \(x\), meaning that \(g(x) \geq 0\) for \(x \geq 0\). Since \(g\) is additive and bounded from below on \([0,+\infty)\), it is linear; more exactly \(g(x)=g(1) x=x\) for all \(x \in \mathbb{R}\).
In summary \(f(x)=x-1, x \in \mathbb{R}\). It is straightforward that this function satisfies the requirements.
