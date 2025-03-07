---
id: fimo_2021_number_theory_p4
year: 2021
number: 4
difficulty: medium
topics: ["number theory"]
source: "IMO 2021 Number Theory Problem 4"
---

Alice is given a rational number \(r > 1\) and a line with two points \(B \neq R\), where point \(R\) contains a red bead and point \(B\) contains a blue bead. Alice plays a solitaire game by performing a sequence of moves. In every move, she chooses a (not necessarily positive) integer \(k\), and a bead to move. If that bead is placed at point \(X\), and the other bead is placed at \(Y\), then Alice moves the chosen bead to point \(X^{\prime}\) with \(\overrightarrow{Y X^{\prime}}=r^{k} \overrightarrow{Y X}\).
Alice's goal is to move the red bead to the point \(B\). Find all rational numbers \(r > 1\) such that Alice can reach her goal in at most 2021 moves.


---
Denote the red and blue beads by \(\mathcal{R}\) and \(\mathcal{B}\), respectively. Introduce coordinates on the line and identify the points with their coordinates so that \(R=0\) and \(B=1\). Then, during the game, the coordinate of \(\mathcal{R}\) is always smaller than the coordinate of \(\mathcal{B}\). Moreover, the distance between the beads always has the form \(r^{\ell}\) with \(\ell \in \mathbb{Z}\), since it only multiplies by numbers of this form. Denote the value of the distance after the \(m^{\text {th }}\) move by \(d_{m}=r^{\alpha_{m}}\), \(m=0,1,2, \ldots\) (after the \(0^{\text {th }}\) move we have just the initial position, so \(\alpha_{0}=0\) ).
If some bead is moved in two consecutive moves, then Alice could instead perform a single move (and change the distance from \(d_{i}\) directly to \(d_{i+2}\) ) which has the same effect as these two moves. So, if Alice can achieve her goal, then she may as well achieve it in fewer (or the same) number of moves by alternating the moves of \(\mathcal{B}\) and \(\mathcal{R}\). In the sequel, we assume that Alice alternates the moves, and that \(\mathcal{R}\) is shifted altogether \(t\) times.
If \(\mathcal{R}\) is shifted in the \(m^{\text {th }}\) move, then its coordinate increases by \(d_{m}-d_{m+1}\). Therefore, the total increment of \(\mathcal{R}\) 's coordinate, which should be 1 , equals
\[
\begin{aligned}
\text { either } & \left(d_{0}-d_{1}\right)+\left(d_{2}-d_{3}\right)+\cdots+\left(d_{2 t-2}-d_{2 t-1}\right)=1+\sum_{i=1}^{t-1} r^{\alpha_{2 i}}-\sum_{i=1}^{t} r^{\alpha_{2 i-1}}, \\
\text { or } & \left(d_{1}-d_{2}\right)+\left(d_{3}-d_{4}\right)+\cdots+\left(d_{2 t-1}-d_{2 t}\right)=\sum_{i=1}^{t} r^{\alpha_{2 i-1}}-\sum_{i=1}^{t} r^{\alpha_{2 i}},
\end{aligned}
\]
depending on whether \(\mathcal{R}\) or \(\mathcal{B}\) is shifted in the first move. Moreover, in the former case we should have \(t \leqslant 1011\), while in the latter one we need \(t \leqslant 1010\). So both cases reduce to an equation
\[
\sum_{i=1}^{n} r^{\beta_{i}}=\sum_{i=1}^{n-1} r^{\gamma_{i}}, \quad \beta_{i}, \gamma_{i} \in \mathbb{Z},
\]
for some \(n \leqslant 1011\). Thus, if Alice can reach her goal, then this equation has a solution for \(n=1011\) (we can add equal terms to both sums in order to increase \(n\) ).
Conversely, if (1) has a solution for \(n=1011\), then Alice can compose a corresponding sequence of distances \(d_{0}, d_{1}, d_{2}, \ldots, d_{2021}\) and then realise it by a sequence of moves. So the problem reduces to the solvability of \((1)\) for \(n=1011\).
Assume that, for some rational \(r\), there is a solution of (1). Write \(r\) in lowest terms as \(r=a / b\). Substitute this into (1), multiply by the common denominator, and collect all terms on the left hand side to get
\[
\sum_{i=1}^{2 n-1}(-1)^{i} a^{\mu_{i}} b^{N-\mu_{i}}=0, \quad \mu_{i} \in\{0,1, \ldots, N\},
\]
for some \(N \geqslant 0\). We assume that there exist indices \(j_{-}\)and \(j_{+}\)such that \(\mu_{j_{-}}=0\) and \(\mu_{j_{+}}=N\). Reducing (2) modulo \(a-b\) (so that \(a \equiv b\) ), we get
\[
0=\sum_{i=1}^{2 n-1}(-1)^{i} a^{\mu_{i}} b^{N-\mu_{i}} \equiv \sum_{i=1}^{2 n-1}(-1)^{i} b^{\mu_{i}} b^{N-\mu_{i}}=-b^{N} \quad \bmod (a-b)
\]
Since \(\operatorname{gcd}(a-b, b)=1\), this is possible only if \(a-b=1\).
Reducing (2) modulo \(a+b\) (so that \(a \equiv-b\) ), we get
\[
0=\sum_{i=1}^{2 n-1}(-1)^{i} a^{\mu_{i}} b^{N-\mu_{i}} \equiv \sum_{i=1}^{2 n-1}(-1)^{i}(-1)^{\mu_{i}} b^{\mu_{i}} b^{N-\mu_{i}}=S b^{N} \quad \bmod (a+b)
\]
for some odd (thus nonzero) \(S\) with \(|S| \leqslant 2 n-1\). Since \(\operatorname{gcd}(a+b, b)=1\), this is possible only if \(a+b \mid S\). So \(a+b \leqslant 2 n-1\), and hence \(b=a-1 \leqslant n-1=1010\).
Thus we have shown that any sought \(r\) has the form indicated in the answer. It remains to show that for any \(b=1,2, \ldots, 1010\) and \(a=b+1\), Alice can reach the goal. For this purpose, in (1) we put \(n=a, \beta_{1}=\beta_{2}=\cdots=\beta_{a}=0\), and \(\gamma_{1}=\gamma_{2}=\cdots=\gamma_{b}=1\).
