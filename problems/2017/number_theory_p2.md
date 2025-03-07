---
id: fimo_2017_number_theory_p2
year: 2017
number: 2
difficulty: medium
topics: ["number theory"]
source: "IMO 2017 Number Theory Problem 2"
---

Let \(p \geqslant 2\) be a prime number. Eduardo and Fernando play the following game making moves alternately: in each move, the current player chooses an index \(i\) in the set \(\{0,1, \ldots, p-1\}\) that was not chosen before by either of the two players and then chooses an element \(a_{i}\) of the set \(\{0,1,2,3,4,5,6,7,8,9\}\). Eduardo has the first move. The game ends after all the indices \(i \in\{0,1, \ldots, p-1\}\) have been chosen. Then the following number is computed:
\[
M=a_{0}+10 \cdot a_{1}+\cdots+10^{p-1} \cdot a_{p-1}=\sum_{j=0}^{p-1} a_{j} \cdot 10^{j}
\]
The goal of Eduardo is to make the number \(M\) divisible by \(p\), and the goal of Fernando is to prevent this.
Prove that Eduardo has a winning strategy.

---
We say that a player makes the move \(\left(i, a_{i}\right)\) if he chooses the index \(i\) and then the element \(a_{i}\) of the set \(\{0,1,2,3,4,5,6,7,8,9\}\) in this move.
If \(p=2\) or \(p=5\) then Eduardo chooses \(i=0\) and \(a_{0}=0\) in the first move, and wins, since, independently of the next moves, \(M\) will be a multiple of 10 .
Now assume that the prime number \(p\) does not belong to \(\{2,5\}\). Eduardo chooses \(i=p-1\) and \(a_{p-1}=0\) in the first move. By Fermat's Little Theorem, \(\left(10^{(p-1) / 2}\right)^{2}=10^{p-1} \equiv 1(\bmod p)\), So \(p \mid\left(10^{(p-1) / 2}\right)^{2}-1=\left(10^{(p-1) / 2}+1\right)\left(10^{(p-1) / 2}-1\right)\). Since \(p\) is prime, either \(p \mid 10^{(p-1) / 2}+1\) or \(p \mid 10^{(p-1) / 2}-1\). Thus we have two cases:
Case \(a: 10^{(p-1) / 2} \equiv-1(\bmod p)\)
In this case, for each move \(\left(i, a_{i}\right)\) of Fernando, Eduardo immediately makes the move \(\left(j, a_{j}\right)=\) \(\left(i+\frac{p-1}{2}, a_{i}\right)\), if \(0 \leqslant i \leqslant \frac{p-3}{2}\), or \(\left(j, a_{j}\right)=\left(i-\frac{p-1}{2}, a_{i}\right)\), if \(\frac{p-1}{2} \leqslant i \leqslant p-2\). We will have \(10^{j} \equiv-10^{i}\) \((\bmod p)\), and so \(a_{j} \cdot 10^{j}=a_{i} \cdot 10^{j} \equiv-a_{i} \cdot 10^{i}(\bmod p)\). Notice that this move by Eduardo is always possible. Indeed, immediately before a move by Fernando, for any set of the type \(\{r, r+(p-1) / 2\}\) with \(0 \leqslant r \leqslant(p-3) / 2\), either no element of this set was chosen as an index by the players in the previous moves or else both elements of this set were chosen as indices by the players in the previous moves. Therefore, after each of his moves, Eduardo always makes the sum of the numbers \(a_{k} \cdot 10^{k}\) corresponding to the already chosen pairs \(\left(k, a_{k}\right)\) divisible by \(p\), and thus wins the game.
Case \(b: 10^{(p-1) / 2} \equiv 1(\bmod p)\)
In this case, for each move \(\left(i, a_{i}\right)\) of Fernando, Eduardo immediately makes the move \(\left(j, a_{j}\right)=\) \(\left(i+\frac{p-1}{2}, 9-a_{i}\right)\), if \(0 \leqslant i \leqslant \frac{p-3}{2}\), or \(\left(j, a_{j}\right)=\left(i-\frac{p-1}{2}, 9-a_{i}\right)\), if \(\frac{p-1}{2} \leqslant i \leqslant p-2\). The same argument as above shows that Eduardo can always make such move. We will have \(10^{j} \equiv 10^{i}\) \((\bmod p)\), and so \(a_{j} \cdot 10^{j}+a_{i} \cdot 10^{i} \equiv\left(a_{i}+a_{j}\right) \cdot 10^{i}=9 \cdot 10^{i}(\bmod p)\). Therefore, at the end of the game, the sum of all terms \(a_{k} \cdot 10^{k}\) will be congruent to
\[
\sum_{i=0}^{\frac{p-3}{2}} 9 \cdot 10^{i}=10^{(p-1) / 2}-1 \equiv 0 \quad(\bmod p)
\]
and Eduardo wins the game.
